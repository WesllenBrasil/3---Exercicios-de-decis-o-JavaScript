//Exercício 2: Avaliar a aprovação de um aluno.
//Descrição: Considerando duas notas (ex: let nota1 = 7; let nota2 = 5;),
// calcule a média e use uma estrutura de decisão para exibir se o aluno foi aprovado (média >= 6), em recuperação (média entre 4 e 5.9) ou reprovado (média < 4).

let nota1 = 7
let nota2 = 5
let media = (nota1 + nota2)/2

    console.log("A media do aluno é", media)

if (media >= 6) {
    console.log("Aluno Aprovado")
}else if ( media < 4 ) {
    console.log("Aluno Reprovado")
}else {
    console.log("Aluno em recuperação")
}
