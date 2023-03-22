const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  res.render("vista-crear-empleado", { title: "Crear Empleado" });
});

module.exports = router;
