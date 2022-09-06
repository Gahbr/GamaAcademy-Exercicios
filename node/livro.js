/* Criando classes e métodos
================================== */
//Criando uma classe em NodeJS
class Livros{// Desenvolvendo uma classe com o nosso construtor
    constructor(nome_livro,autor,editora,paginas){
    this.nome_livro=nome_livro;
    this.autor=autor;
    this.editora=editora;
    this.paginas=paginas;
    }
        //Criando métodos dentro de uma classe
        vendaTitulo(){
            console.log(`Titulo livo:${this.nome_livro}`);
            console.log(`Nome do autor:${this.autor}`);
        }

        nome_editora(){
            console.log(`Nome da Editora:${this.editora}`);
        }
}
const dados = new Livros("Aprenda NodeJS","Professor Ricardo A. Bontempo","Editora Deus me Chama");

dados.vendaTitulo();
dados.nome_editora();
