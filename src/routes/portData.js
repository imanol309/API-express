const express =  require('express')
const mysql =  require('mysql') 
const routerPort =  express.Router();

const credentials={
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'init'
}

routerPort.post('/', (req, res) => {
    var connection= mysql.createConnection(credentials)

    const DataObj = {
        nombre: req.body.nombre,
        salarios: req.body.salarios
      };

    console.log(req.body)
    const query = 'INSERT INTO trabajadores SET ?';
    connection.query(query, DataObj, (error, result) => {
        if (err) {
            res.status(500).send(error)
        } else {
            res.status(200).send('Dato creado correctamente')
        }
    })
})

module.exports = routerPort;