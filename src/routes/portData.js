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

    connection.query(query, DataObj, error => {
        if (error) {
            res.status(500).send(error)
        } else {
            res.status(200).send('Dato creado correctamente en la tabla trabajadores')
        }
    })
})

routerPort.post('/usuarios', (req, res) => {

    var connection= mysql.createConnection(credentials)

    const DataObj = {
        nombre: req.body.nombre,
        sexo: req.body.sexo,
        correo: req.body.correo,
        fecha: req.body.fecha,
        codigo: req.body.codigo

    };

    console.log(req.body)
    const query = 'INSERT INTO usuarios SET ?';

    connection.query(query, DataObj, error => {
        if (error) {
            res.status(500).send(error)
        } else {
            res.status(200).send('Dato creado correctamente en la tabla usuarios')
        }
    })
})



module.exports = routerPort;