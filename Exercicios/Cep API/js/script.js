document.querySelector('.busca').addEventListener('submit', async (event) => {
    const cep = document.getElementById('textoCep').value;
    event.preventDefault();
  

    fetch(`https://api.postmon.com.br/v1/cep/${cep}`).then(retornoCep =>{
        return retornoCep.json();
     }).then(corpo =>{
      const endereco = corpo.logradouro;
      const bairro = corpo.bairro;
       const estado = corpo.estado;
       const cidade= corpo.cidade;

        document.getElementById('endereco').value= endereco;
        document.getElementById('bairro').value= bairro;
        document.getElementById('cep').value= cep;
        document.getElementById('estado').value= estado;
        document.getElementById('cidade').value= cidade;
     })
})


function limpar(){
    
   document.getElementById('textoCep').value = ''; 
   document.getElementById('endereco').value = ''; 
   document.getElementById('bairro').value = ''; 
   document.getElementById('cep').value = ''; 
   document.getElementById('estado').value = ''; 
   document.getElementById('cidade').value = ''; 
   document.getElementById('textoNome').value = ''; 
   
}