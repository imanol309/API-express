// pack required
const express =  require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mysql =  require('mysql') 
const app =  express()
const viewData =  require('./routes/viewData')
const postData =  require('./routes/portData')
const putData =  require('./routes/putData')

const credentials={
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'init'
} 


// settings
app.use(cors())
app.set('port', process.env.PORT || 4000)

//credentials

//router the serve, main router
app.get('/', (req, res) => {
    res.send('hola desde tu datos')
})

app.use(bodyParser.json())

//routes to view data
app.use('/datos', viewData)
app.use('/datos/usuarios', viewData)
app.use('/datos/usuarios/:id', viewData)
app.use('/crear', postData)
app.use('/crear/usuarios', postData)
// app.use('/routes/putData/modificar/:id', putData)


app.put('/modificar/:id', (req, res) => {
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


app.delete('/eliminarTrabajadores/:id', (req,res) => {
    var connection= mysql.createConnection(credentials)
    const { id } = req.params;
    const sql  = `DELETE FROM trabajadores WHERE id = ${id}`
    console.log(req.body)
    connection.query(sql, error => {
        if (error) {
            res.status(500).send(error)
        } else {
            res.status(200).send('Dato eliminado correctamente de la  tabla trabajadores')
        }
    })
})


app.delete('/eliminarUsuarios/:id', (req,res) => {
    var connection= mysql.createConnection(credentials)
    const { id } = req.params;
    const sql  = `DELETE FROM usuarios WHERE id_usuarios = ${id}`
    console.log(req.body)
    connection.query(sql, error => {
        if (error) {
            res.status(500).send(error)
        } else {
            res.status(200).send('Dato eliminado correctamente de la  tabla trabajadores')
        }
    })
})




// starting the serve 
app.listen(app.get('port'), () => console.log(`Servidor abierto con exito en el puerto ${app.get('port')}`))