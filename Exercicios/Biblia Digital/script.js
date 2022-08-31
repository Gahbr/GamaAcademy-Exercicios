document.querySelector('.busca').addEventListener('submit', async (event) => {
    event.preventDefault();
    var salmo = document.getElementById('numSalmo').value;
 
    fetch(`https://www.abibliadigital.com.br/api/verses/nvi/sl/${salmo}`).then(dados =>{
        return dados.json();
      
     }).then(biblia =>{

        try {
             // limpando tabela
        document.getElementById('tabela').innerHTML = "";
        
        nome = biblia.book.name;
        autores = biblia.book.author;
        grupo = biblia.book.group;
        versoNum = biblia.verses.number;
 
        document.getElementById("nome").value = nome;
        document.getElementById("autores").value = autores
        document.getElementById("grupo").value = grupo;
        document.getElementById('tabela').innerHTML += `
                    <tr>
                            <th>Verso</th>
                            <th>Texto</th>
                     </tr>
        `;
              
        biblia.verses.forEach(element => {
            document.getElementById("tabela").innerHTML += `
                <tr>
                    <td>${element.number}</td>
                    <td>${element.text}</td>
                </tr>
                `
        });

        } catch (error) {
            alert("Insira um salmo válido!")
        }
       
     })
   
})
