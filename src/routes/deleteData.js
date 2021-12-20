const express = require("express");
const routerDelete = express.Router();

routerDelete.delete("/Trabajadores/:id", (req, res) => {
  const { id } = req.params;
  const sql = `DELETE FROM trabajadores WHERE id = ${id}`;
  require("../index").query(sql, (error) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res
        .status(200)
        .send("Dato eliminado correctamente de la  tabla trabajadores");
    }
  });
});

routerDelete.delete("/Usuarios/:id", (req, res) => {
  const { id } = req.params;
  const sql = `DELETE FROM usuarios WHERE id_usuarios = ${id}`;
  require("../index").query(sql, (error) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res
        .status(200)
        .send("Dato eliminado correctamente de la  tabla trabajadores");
    }
  });
});

module.exports = routerDelete;
