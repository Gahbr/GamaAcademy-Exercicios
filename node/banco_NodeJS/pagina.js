let http= require('http')

//Criando um serviço para levantar a nossa página
http.createServer( function(req,res){
    res.writeHead(200,{'Content-Type' : 'text/html'})
    res.end("Subindo a nossa primeira página com node")
}).listen(3000)