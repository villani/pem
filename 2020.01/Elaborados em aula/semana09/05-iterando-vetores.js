// Limite inferior da faixa de valores
var min = 1;

// Limite superior da faixa de valores
// O limite superior deve ser dobrado quando trabalhado com números negativos
var max = 100; // Para o limite superior = 100

var vetor = [];

// Preenchendo um vetor por meio de uma estrutura de repetição
for (var i = 0; i < 5; i++) {
    var aleatorio = parseInt(Math.random() * max + min);
    vetor.push(aleatorio);
}

// Mostrando os elementos do vetor separados com "|" (pipe)
console.log(vetor.join(" | "));

// Ordenando elementos do vetor
vetor.sort();

// Mostrar o vetor com os elementos ordenados
console.log(vetor.join(" | "));

// Removendo elementos do vetor
var menor = vetor.shift();  // - Remove o elemento do início.
var maior = vetor.pop();    // - Remove o elemento do final. 

console.log("Menor valor: " + menor);
console.log("Maior valor: " + maior);
console.log("Elementos restantes: " + vetor.join(" | "));

// INTRODUÇÃO A MATRIZES
// - Assunto melhor enfatizado nas aulas a seguir.
var matriz = [ 
    [1, 2, 3] , 
    [4, 5, 6], 
    [7, 8, 9] 
];

console.log("Valor: " + matriz[1][2]);