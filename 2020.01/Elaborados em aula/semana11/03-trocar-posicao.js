// Um vetor com dois elementos
var vetor = [13, 78];
console.log(vetor.join(" - "));

// Um variável temporária/auxiliar
// Armazeno o valor de um dos elementos na variável auxiliar
var aux = vetor[0];

vetor[0] = vetor[1];

vetor[1] = aux;

console.log(vetor.join(" - "));
