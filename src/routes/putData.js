const express =  require('express')
const mysql =  require('mysql') 
const routerPut =  express.Router();

const credentials={
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'init'
} 


routerPut.put('/modificar/:id', (req, res) => {
    var connection= mysql.createConnection(credentials)

    const { id } = req.params;
    const {nombre, salarios} = req.body
    const sql =  `UPDATE trabajadores SET nombre = '${nombre}', salarios = '${salarios}' WHERE id = '${id}'`

    console.log(req.body)
    connection.query(sql, error => {
        if (error) {
            res.status(500).send(error)
        } else {
            res.status(200).send('Dato modificado correctamente en la tabla trabajadores')
        }
    })
})

module.exports = routerPut;
