fetch(`https://api.tvmaze.com/search/shows?q=star%20wars`).then(retorno_filmes => {
   return retorno_filmes.json();
}).then(filmes =>{
            filmes.forEach(filme => {
                document.getElementById('tabela').innerHTML+= `
                <tr>
                <td><a href="${filme.show.url}">${filme.show.name}</a></td>
                <td><img src="${filme.show.image.medium}" alt="poster do filme ${filme.show.name} "></th>
              </tr>
                `
            });
})