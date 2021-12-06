const express =  require('express')
const cors = require('cors')
const mysql =  require('mysql') 
const app =  express()
app.use(cors())

const credentials={
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'init'
}


app.get('/', (req, res) => {
    res.send('hola desde tu datos')
})


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


app.listen(4000, () => console.log('hola soy el servidor'))