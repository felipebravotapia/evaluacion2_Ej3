const SqlServerConnection = require("../bin/bd");

module.exports = {
  insertEmployee: async (
    NationalIDNumber,
    LoginID,
    OrganizationNode,
    JobTitle,
    BirthDate,
    MaritalStatus,
    Gender
  ) => {
    try {
      this.sqlServerConnection = new SqlServerConnection();
      await this.sqlServerConnection.connect();
      const query = `INSERT INTO [HumanResources].[Employee](
        [BusinessEntityID]
        ,[NationalIDNumber]
        ,[LoginID]
        ,[OrganizationNode]
        ,[JobTitle]
        ,[BirthDate]
        ,[MaritalStatus]
        ,[Gender]) VALUES(
          ${Math.floor(Math.random() * 1000)}
          ,${NationalIDNumber}
          ,'${LoginID}'
          ,'${OrganizationNode}'
          ,'${JobTitle}'
          ,'${BirthDate}'
          ,'${MaritalStatus}'
          ,'${Gender}'
          )`;
      console.log(query);
      const rows = await this.sqlServerConnection.executeQuery(query);
      return rows;
    } catch (err) {
      throw err;
    } finally {
      // this.sqlServerConnection.close();
    }
  },
  getEmployee: async () => {
    {
      try {
        this.sqlServerConnection = new SqlServerConnection();
        await this.sqlServerConnection.connect();
        const query = `SELECT TOP (1000) [BusinessEntityID]
        ,[NationalIDNumber]
        ,[LoginID]
        ,[OrganizationNode]
        ,[OrganizationLevel]
        ,[JobTitle]
        ,[BirthDate]
        ,[MaritalStatus]
        ,[Gender]
        ,[HireDate]
        ,[SalariedFlag]
        ,[VacationHours]
        ,[SickLeaveHours]
        ,[CurrentFlag]
        ,[rowguid]
        ,[ModifiedDate]
      FROM [HumanResources].[Employee]`;
        return await this.sqlServerConnection.executeQuery(query);
      } catch (err) {
        throw err;
      } finally {
        // this.sqlServerConnection.close();
      }
    }
  },
};
