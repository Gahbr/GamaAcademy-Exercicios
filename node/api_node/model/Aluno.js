const Sequelize = require('sequelize')
const db = require ('../db')


const Aluno = db.define('estudante', {
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull: false,
        primaryKey:true
    },
    nome:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    media:{
        type:Sequelize.INTEGER,
    },
   
   
})


module.exports = Aluno;
db.sync()