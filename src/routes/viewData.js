const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  require("../index").query("SELECT * FROM trabajadores", (error, result) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).send(result);
    }
  });
});

router.get("/usuarios", (req, res) => {
  require("../index").query("SELECT * FROM usuarios", (error, result) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).send(result);
    }
  });
});

router.get("/usuarios/:id", (req, res) => {
  const { id } = req.params;
  require("../index").query(
    "SELECT * FROM usuarios WHERE id_usuarios = ?",
    [id],
    (error, result) => {
      if (error) {
        res.status(500).send(error);
      } else {
        res.status(200).send(result[0]);
      }
    }
  );
});

module.exports = router;
