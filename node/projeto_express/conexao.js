const Sequelize = require('sequelize')


const sequelize = new Sequelize('javagama', 'root','mysql', {
    dialect:'mysql',
    host:'localhost',
    port:3306
});

module.exports = sequelize;

sequelize.authenticate().then(()=>{
    console.log("Conexão com exito");
}).catch((err)=>{
    console.log("Erro de conexão " + err);
})


const Aluno = sequelize.define('aluno',{
    nome:{
        type:Sequelize.STRING
    },
    idade:{
        type:Sequelize.INTEGER
    },
    email:{
        type:Sequelize.STRING
    }
})

//Aluno.sync({force:true})
/* 
Aluno.create({
    nome:"Nameless",
    idade:40,
    email:"mail@mail.com"
}) */