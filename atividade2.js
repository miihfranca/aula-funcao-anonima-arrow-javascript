/*1) Criar uma função de seta (arrow function) que recebe um valor numéricos inteiros e positivos como parâmetro:
a) Se o número for múltiplo de 5, retornar "Bora".
b) Se o número for múltiplo de 3, retornar "Dale".
c) Se o número for múltiplo de 5 e 3, retornar "JAVASCRIPT".
d) Chamar a função e exibir no console o resultado.
*/
 var multiplos = ()=> {
     var n = numero
     if (n % 5 ==0 && n%3 ==0){
        console.log("JAVASCRIPT")
     } else if (n  % 5 == 0){
        console.log("Bora")
     } else if (n %3 == 0){
        console.log("Dale")
     } else { console.log("Esse número não é múltiplo 5 e nem de 3.")

     }
 }
 console.log(multiplos(5));

