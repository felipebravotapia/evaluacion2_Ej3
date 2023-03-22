const { Connection, Request, TYPES } = require("tedious");

const config = {
  server: "10.7.0.13",
  authentication: {
    type: "default",
    options: {
      userName: "usr_prueba",
      password: "Pf123456",
    },
  },
  options: {
    encrypt: false,
    database: "AdventureWorks2017",
    port: 64573,
    trustServerCertificate: true,
  },
};

class SqlServerConnection {
  constructor() {
    this.connection = new Connection(config);
  }

  async connect() {
    return new Promise((resolve, reject) => {
      this.connection.connect((err) => {
        if (err) {
          reject(err);
        } else {
          resolve("Conexión establecida con éxito");
        }
      });
    });
  }

  close() {
    this.connection.close();
  }

  executeQuery(query) {
    return new Promise((resolve, reject) => {
      const request = new Request(query, (err, rowCount) => {
        if (err) {
          reject(err);
        } else {
          resolve(rowCount);
        }
      });

      const result = [];
      request.on("row", (columns) => {
        const row = {};
        columns.forEach((column) => {
          row[column.metadata.colName] = column.value;
        });
        result.push(row);
      });

      request.on("doneInProc", () => {
        resolve(result, result.length, result);
      });

      this.connection.execSql(request);
    });
  }
}

module.exports = SqlServerConnection;
