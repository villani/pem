/*
// Criando um vetor a partir de um texto
var frutas = "maçã pêra melância mamão abacaxi";

// Mostrando o conteúdo da variável.
console.log(frutas); // é uma string.

// Dividindo a string em vários pedaços, usando o caracter ' ' (espaço).
frutas = frutas.split(" ");

// Mostrando o conteúdo da variável.
console.log(frutas); // é um vetor.

console.log("2ª fruta: " + frutas[1]);
*/

// ENTRADAS DO URI
var input = "7\n4 5\n13 10\n6 4\n3 3\n3 5\n3 4\n3 8";
console.log(input);

var lines = input.split("\n");
console.log(lines);

var line3 = lines[2].split(" ");
var min = Math.min(line3[0], line3[1]);
var max = Math.max(line3[0], line3[1]);

console.log(min);
console.log(max);