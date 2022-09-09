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

// utilizando a passagem de parametros através da variavel "con"
    con.connect( function(err){
        if(err) throw err;
        console.log("Conectado!");
        let dados = [{nome:'Rita',endereco:'Rua Fábia, 1000'}, {nome:'Ana',endereco:'Rua Catão,902'} ,{nome:'Nicole ',endereco:'Rua Taipas,920'} ,{nome:'Romulo ',endereco:'Rua das Cruzes,100'}]
        
       dados.forEach(registro => {
        con.query(`INSERT INTO consumidores values ('${registro.nome}' , '${registro.endereco}')`)
        console.log("Registro inserido!");
       });
    });