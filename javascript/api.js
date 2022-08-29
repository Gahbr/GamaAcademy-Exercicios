//Utilização do fetch para fazer a requisição de uma API

//api 1 

fetch(`https://economia.awesomeapi.com.br/json/last/USD-BRL`).then( resposta =>{
    return resposta.json();    
}).then( corpo =>{
    document.getElementById('retorno').innerHTML = corpo.USDBRL.name;
    document.getElementById('valor').innerHTML = corpo.USDBRL.high;
})

//api 2


fetch(`https://api.postmon.com.br/v1/cep/05049000`).then(retornoCep =>{
   return retornoCep.json();
}).then(preenchimentoCampo =>{
    document.getElementById('cep').innerHTML = preenchimentoCampo.cep;
    document.getElementById('cep').innerHTML = preenchimentoCampo.logradouro;

})