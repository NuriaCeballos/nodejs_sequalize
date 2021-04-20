


module.exports=(connection,Sequelize)=>{
const User=connection.define('users',{
    firstname: {type:Sequelize.STRING},
    lastname:{type:Sequelize.STRING},
    email:{type:Sequelize.STRING},
    password:{type:Sequelize.STRING}
})
    return User

}
