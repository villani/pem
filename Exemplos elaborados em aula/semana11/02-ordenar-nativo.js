// Definir o valor mínimo da faixa de valores.
var min = 1;

// Definir o valor máximo da faixa de valores.
var max = 1000;

// Definir vetor onde os valores serão armazenados.
var vetor = [];

// Repetição para preencher os elementos do vetor.
for (var i = 0; i < 10; i++) {
    
    // Gerar o número aleatório.
    var num = parseInt(Math.random() * (max - min)) + min;

    // Armazenar o número no vetor.
    vetor.push(num);
}

// Exibir o vetor gerado.
console.log(vetor.join(", "));

// Ordenando o vetor com o método 'sort'.
vetor.sort();

// 'reverse' - Invertendo os elementos do vetor.
vetor.reverse();

// Exibir o vetor ordenado.
console.log(vetor.join(", "));