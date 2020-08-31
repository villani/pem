// ENTRADA DE DADOS
var input = prompt("Informe as entradas:");
var lines = input.split(" ");

var raio = Number(lines[0]);

// PROCESSAMENTO
var n = 3.14159;
var area = n * Math.pow(raio, 2);

// SAÍDA DE DADOS
console.log("A=" + area.toFixed(4));