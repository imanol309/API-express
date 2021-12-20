// pack required
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const app = express();
const viewData = require("./routes/viewData");
const postData = require("./routes/portData");
const putData = require("./routes/putData");
const deleteData = require("./routes/deleteData");

var connection = mysql.createConnection({
  host: "us-cdbr-east-05.cleardb.net",
  user: "b54f80c10f2fd6",
  password: "25106db8",
  database: "heroku_eb9d6273eebd95a",
});


// settings
app.use(cors());
app.set("port", process.env.PORT || 4000);

// app.use("/", express.static(__dirname + "/public"));

app.use(bodyParser.json());

//routes to view data
app.use("/", viewData);
app.use("/crearData", postData);
app.use("/modificarData", putData);
app.use("/eliminarData", deleteData);

// starting the serve
app.listen(app.get("port"), () =>
  console.log(`Servidor abierto con exito en el puerto ${app.get("port")}`)
);

module.exports = connection;