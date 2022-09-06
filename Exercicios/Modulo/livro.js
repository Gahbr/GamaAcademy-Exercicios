var livro = function (){
    MóduloLivro = "Modulo 1";
    Nome_Livro = 'Livro dos livros';
    Quantidade_Livro = 3;
    Valor_Unitario = 50;
    calculo =  Quantidade_Livro * Valor_Unitario;

    return `Nome do livro: ${Nome_Livro} Valor bruto: ${calculo}`;
}

module.exports = livro;