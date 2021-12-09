const express =  require('express')
const cors = require('cors')
const mysql =  require('mysql') 
const app =  express()
app.use(cors())
// settings
app.set('port', process.env.PORT || 4000)

//credentials

const credentials={
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'init'
}

//router the serve, main router
app.get('/', (req, res) => {
    res.send('hola desde tu datos')
})

//routes to view data
app.get('/datos', (req, res) => {
    var connection= mysql.createConnection(credentials)
    connection.query('SELECT * FROM usuarios', (error, result)=> {
        if(error) {
            res.status(500).send(error)
        } else {
            res.status(200).send(result)
        }
    })
})

// app.port('/enviar', (req, res) => {
//     connection.query('INSERT INTO usuarios',[req.body], (error, result)=> {
//         if(error) {
//             res.status(500).send(error)
//         } else {
//             res.status(200).send(result)
//         }
//     })
// })


// starting the serve 
app.listen(app.get('port'), () => console.log(`Servidor abierto con exito en el puerto ${app.get('port')}`))