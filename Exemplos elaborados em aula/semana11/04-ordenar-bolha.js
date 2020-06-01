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

// MÉTODO BOLHA DE ORDENAÇÃO - bubble sort
// Estrutura de repetição que define o número de elementos que devem ser ordenados.
for (var n = vetor.length; n > 0; n--) {
    
    // - Estrutura de repetição que faz a comparação par a par de cada elemento que deve ser ordenado.
    for (var i = 0; i < n - 1; i++) {
        
        // - Estrutura de seleção que faz a troca quando o elemento de uma posição é menor que o elemento da posição seguinte.
        if (vetor[i] < vetor[i + 1]) {
            var aux = vetor[i];
            vetor[i] = vetor[i + 1];
            vetor[i + 1] = aux;
        }
    }
}

// Exibir o vetor ordenado.
console.log(vetor.join(", "));