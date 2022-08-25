function salvar(){

    //Variável responsável por armazenar os textos digitados
    let texto = document.getElementById('texto').value;

    //Variável criada para receber o nome do arquivo a ser criado
    let titulo = document.getElementById('titulo').value;

    // Variável de armazenamento
    let blob = new Blob([texto], {
        type: "text/plain;charset=utf-8"
    });

    saveAs(blob, titulo + ".txt");
}