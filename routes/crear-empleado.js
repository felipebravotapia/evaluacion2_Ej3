const express = require("express");
const router = express.Router();

const DataController = require("../controller/dataController");

router.post("/", async (req, res, next) => {
  try {
    const data = await DataController.insertEmployee(
      req.body.nationaidnumber,
      req.body.loginid,
      req.body.organizationnode,
      req.body.jobtitle,
      req.body.birthdate,
      req.body.maritalstatus,
      req.body.gener,
    );
    res.send('Empleado Creado con Éxito');
  } catch (err) {
    console.error("Error al Insertar:", err);
    res.status(500).send("Error al obtener datos");
  }
});

module.exports = router;
