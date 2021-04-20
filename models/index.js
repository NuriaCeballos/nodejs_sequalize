const Sequelize = require('sequelize')

/*
const URI='mysql://sequelize:1234@localhost:3306/sequelize'*/

const connection = new Sequelize(`mysql://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`)

let db={}
db.Sequelize = Sequelize
db.connection = connection
db.user=require('./User.model.js')(connection,Sequelize)

//sincronizar sequelize con la bd mysql
db.connection.sync()


//Exportar el objeto db
module.exports=db
