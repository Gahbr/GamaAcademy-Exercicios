//criando uma variavel para fazer a requisição dos módulos
let mysql = require('mysql')

// Criando uma conexão
let con = mysql.createConnection({
    //criando as variáveis de conexão no BD
    host:"localhost",
    user:"root",
    password:"mysql",
    database:"nodejs"
});


    // Utilizando a passagem de parâmetros através da variável con 
con.connect(function(err){
    if(err)throw err;
    con.query("delete from consumidores where nome_consumidor= 'Rita'",function(err,result){
            if(err)throw err;
            console.log("Registro deletado!");

    });
});