const express = require("express");
const router = express.Router();

const DataController = require("../controller/dataController");

router.get("/", async (req, res, next) => {
  try {
    const empleados = await DataController.getEmployee();
    res.render("listar-empleado", { title: "Empleados", empleados });
  } catch (err) {
    console.error("Error al obtener los datos:", err);
    res.status(500).send("Error al obtener datos");
  }
});

module.exports = router;
