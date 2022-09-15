const express = require('express')
const app = express();

app.use(express.static('public'))

app.get("/", (req,res)=>{
    res.send("bem vind");
  
})


app.get("/pagina", (req,res)=>{
    res.sendFile(__dirname+'/index.html')
  
})
const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('O servidor está on no endereço http://localhost:' + listener.address().port)
})
