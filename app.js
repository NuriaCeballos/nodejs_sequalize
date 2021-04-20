require('dotenv').config()
const express = require('express')
const app = express()
const rtMain = require('./routes/rtMain')
var exphbs  = require('express-handlebars')
const DB=require('./models')

//configuración del motor de plantillas handlebars
app.engine('.hbs', exphbs({
    extname: '.hbs'
}))

app.set('view engine', '.hbs')
app.use(express.json())

//middlewares

app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({extended:true}))

//enrutador principal
app.use('/',rtMain)


// configuración de la base de datos
DB.connection.authenticate()
  .then(() => {
    console.log('DB MySQL arrancado.');
  })
  .catch(err => {
    console.error('Error de conexión a bd', err);
  })

  
//arrancamos el servidor:
app.listen(3000, () => console.log('conectado a puerto 3000'))