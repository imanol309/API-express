const express = require("express");
const mysql = require("mysql");
const routerDelete = express.Router();

const credentials = {
  host: "localhost",
  user: "root",
  password: "",
  database: "init",
};

routerDelete.delete("/Trabajadores/:id", (req, res) => {
  var connection = mysql.createConnection(credentials);
  const { id } = req.params;
  const sql = `DELETE FROM trabajadores WHERE id = ${id}`;
  connection.query(sql, (error) => {
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
  var connection = mysql.createConnection(credentials);
  const { id } = req.params;
  const sql = `DELETE FROM usuarios WHERE id_usuarios = ${id}`;
  connection.query(sql, (error) => {
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
