// pack required
const express =  require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mysql =  require('mysql') 
const app =  express()
const viewData =  require('./routes/viewData')
const postData =  require('./routes/portData')
const putData =  require('./routes/putData')


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
app.use('/routes/putData/modificar/:id', putData)




// starting the serve 
app.listen(app.get('port'), () => console.log(`Servidor abierto con exito en el puerto ${app.get('port')}`))