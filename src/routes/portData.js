const express = require("express");
const routerPort = express.Router();

routerPort.post("/", (req, res) => {
  const DataObj = {
    nombre: req.body.nombre,
    salarios: req.body.salarios,
  };

  require("../index").query(
    "INSERT INTO trabajadores SET ?",
    DataObj,
    (error) => {
      if (error) {
        res.status(500).send(error);
      } else {
        res
          .status(200)
          .send("Dato creado correctamente en la tabla trabajadores");
      }
    }
  );
});

routerPort.post("/usuarios", (req, res) => {
  const DataObj = {
    nombre: req.body.nombre,
    sexo: req.body.sexo,
    correo: req.body.correo,
    fecha: req.body.fecha,
    codigo: req.body.codigo,
  };

  require("../index").query("INSERT INTO usuarios SET ?", DataObj, (error) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).send("Dato creado correctamente en la tabla usuarios");
    }
  });
});

module.exports = routerPort;
