const express =  require('express')
const mysql =  require('mysql') 
const router =  express.Router();

const credentials={
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'init'
}

router.get('/', (req, res) => {
    var connection= mysql.createConnection(credentials)
    connection.query('SELECT * FROM trabajadores', (error, result)=> {
        if(error) {
            res.status(500).send(error)
        } else {
            res.status(200).send(result)
        }
    })
})

router.get('/usuarios', (req, res) => {
    var connection= mysql.createConnection(credentials)
    connection.query('SELECT * FROM usuarios', (error, result)=> {
        if(error) {
            res.status(500).send(error)
        } else {
            res.status(200).send(result)
        }
    })
})

module.exports = router;