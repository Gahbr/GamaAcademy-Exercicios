//criando uma variavel para fazer a requisição dos módulos
let mysql = require('mysql')

// Criando uma conexão
let con = mysql.createConnection({
    //criando as variáveis de conexão no BD
    host:"localhost",
    user:"root",
    password:"mysql"
});

// utilizando a passagem de parametros através da variavel "con"
    con.connect( function(err){
        if(err) throw err;
        console.log("Conectado!");
    });