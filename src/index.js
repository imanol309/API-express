// pack required
const express =  require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mysql =  require('mysql') 
const app =  express()
const viewData =  require('./routes/viewData')
const postData =  require('./routes/portData')
const putData =  require('./routes/putData')
const deleteData =  require('./routes/deleteData')


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
app.use('/', express.static(__dirname + '/public'));

app.use(bodyParser.json())


//routes to view data
app.use('/viewData', viewData)
app.use('/crearData', postData)
app.use('/modificarData', putData)
app.use('/eliminarData', deleteData)

// starting the serve 
app.listen(app.get('port'), () => console.log(`Servidor abierto con exito en el puerto ${app.get('port')}`))