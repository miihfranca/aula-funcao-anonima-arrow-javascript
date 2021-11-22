/* 1) Criar uma função anônima para exibir no console um array com os nomes de 5 capitais da região Nordeste do Brasil:
a) Transformar todos os elementos em letras maiúsculas.*/


const estados =(listaDeEstados)=> ["Recife", "Natal", "Salvador", "João pessoa","Bonito"]
    console.log  (listaDeEstados)


/*2) Criar uma função anônima que retorna os números pares maiores que 100 e menores que 450.
a) Chamar a função e exibir no console o retorno da função
     */
    var numerosPares = () =>
    {
        for (let numero =100; numero <=400; numero++){
            if (numero %2 ==0){
                console.log (numero)
            }

        }
    } 
    console.log(numerosPares)
/*3) Criar uma função anônima que recebe quatro strings:
a) Concatenar as strings e retornar o resultado.
b) Chamar a função e exibir no console o resultado. */
 

var juntarStrings = (str1,str2,str3,str4) => 
{
    var palavra1 = str1
    var palavra2 = str2
    var palavra3 = str3
    var palavra4 = str4
    var palavras = palavra1.concat(palavra2, palavra3, palavra4);
    console.log(palavras);

 }
 console.log(juntarStrings ("Olá " + "Mundo!" + "Estou aprendendo" +"JavaScript"))