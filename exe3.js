//Exercício 3 :Verificar o tipo de triângulo.
//Descrição: Dado três lados de um triângulo (ex: let lado1 = 10; let lado2 = 10; let lado3 = 8;), 
//determine se ele é equilátero (todos os lados iguais), isósceles (dois lados iguais) ou escaleno (todos os lados diferentes) e exiba o tipo no console. */

let lado1 = 10
let lado2 = 10
let lado3 = 10

if (lado1 == lado2 && lado1 == lado3){
    console.log("Triagulo Equilátero") //"todos os lados iguais"
}
else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3){
    console.log("Triagulo isósceles") //"dois lados iguais"
}else {
    console.log("Triangulo Escaleno") //"todos os lados diferentes"
}