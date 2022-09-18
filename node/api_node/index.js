const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')
const Aluno = require('./model/Aluno')

app.use(bodyParser.json())
app.use(express.static(__dirname ));


app.get('/soma', (req,res)=>{
    query = req.query
    const media = (Number(query.n1)+Number(query.n2))/2
    console.log(query);
   if(query){res.send(`
        A nota 1 é : ${query.n1} <br>
        A nota 2 é : ${query.n2} <br>
        A média obtida foi: ${media}
        `)}
    else{ res.send("Sem dados")}
    
})

app.get('/media', (req,res)=>{
    body = req.body
    nome = req.body.nome;
    const media = (body.n1+body.n2)/2;
    var resultado;

    if (media>=5){
        resultadoFinal = 'aprovado'
    }else {
        resultadoFinal = 'reprovado'
    }
    res.json(`O aluno(a) ${nome} obteve a média ${media} e foi ${resultado}`)
})


//Exercício 16/09 
app.get('/', (req,res)=>{
    res.sendFile(__dirname+'/index.html')
})

app.get('/resultado', async(req,res)=>{
    query = req.query;
    const media = (Number(query.n1)+Number(query.n2))/2;
    const nome = query.nome;

    //Salvando no banco de dados
    const aluno = await Aluno.create({nome:nome, media:media }) 
    
    res.send(`
    O nome do aluno é : ${nome} <br>
    A média obtida foi: ${media} <br>
    <button> <a href="/">Voltar</a></button>
    `)
});



app.listen(3000,()=>console.log("SERVER ON em http://localhost:3000"))
