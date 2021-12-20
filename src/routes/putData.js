const express = require("express");
const routerPut = express.Router();

routerPut.put("/modificar/:id", (req, res) => {
  const { id } = req.params;
  const { nombre, salarios } = req.body;
  const sql = `UPDATE trabajadores SET nombre = '${nombre}', salarios = '${salarios}' WHERE id = '${id}'`;

  require("../index").query(sql, (error) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res
        .status(200)
        .send("Dato modificado correctamente en la tabla trabajadores");
    }
  });
});

module.exports = routerPut;
