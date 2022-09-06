class Calculo {
    constructor(nome_aluno, disciplina_aluno, nota1, nota2){
        this.nome_aluno = nome_aluno;
        this.disciplina_aluno = disciplina_aluno;
        this.nota1 = nota1;
        this.nota2 = nota2;
    }

    mediaAluno(){
        var media = (this.nota1+this.nota2)/2;
        console.log(`Aluno: ${this.nome_aluno} Média: ${media}`);
    }
    notas(){
        console.log(`Aluno: ${this.nome_aluno} Nota 1:${this.nota1} Nota 2: ${this.nota2}`);
    }
    media(){
        var media = (this.nota1+this.nota2)/2;
        console.log(`Média : ${media}`);
    }
}

var aluno1 = new Calculo('Gabriel', 'NodeJs', 7,5);
aluno1.mediaAluno()
aluno1.notas();
aluno1.media();