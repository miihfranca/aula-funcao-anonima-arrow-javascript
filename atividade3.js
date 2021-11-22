/*1) Criar uma função anônima para exibir todos os elementos do array abaixo que possuam idade entre 28 a 30:
    var aprovados = [
        {candidato: "Renata Soares", nota: 7.8, idade: 29},
        {candidato: "Marcos Teixeira", nota: 7.8, idade: 26},
        {candidato: "Priscila Gomes", nota: 7.8, idade: 30},
        {candidato: "João Oliveira", nota: 7.8, idade: 27},
        {candidato: "Adriana Telles", nota: 7.8, idade: 28},
    ];
a) Chamar a função e exibir o resultado no console.
*/
var aprovadosCandidatos =()=> { [

    {candidato: "Renata Soares", nota: 7.8, idade: 29},
    {candidato: "Marcos Teixeira", nota: 7.8, idade: 26},
    {candidato: "Priscila Gomes", nota: 7.8, idade: 30},
    {candidato: "João Oliveira", nota: 7.8, idade: 27},
    {candidato: "Adriana Telles", nota: 7.8, idade: 28},
]};
console.log(aprovadosCandidatos());
/*2) Criar um função anônima que recebe uma string como parâmetro:
a) Repetir o valor do parâmetro 37 vezes.
b) Retornar o Resultado.
c) Chamar a função e exibir o resultado no console.
*/


var repetindo = function(parametro){
    var paraRepetir = parametro;

    for(var contador = 1; contador <= 37; contador++){
        console.log(paraRepetir);
    }
}

console.log(repetindo());

