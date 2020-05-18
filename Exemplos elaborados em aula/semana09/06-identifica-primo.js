// DECLARO UM VETOR VAZIO (sem elementos)
var inteiros = [];

// INSIRO CINCO INTEIROS ALEATÓRIOS NO VETOR
for (var i = 0; i < 5; i++) {

    // Gerar um valor aleatório entre 1 e 100
    inteiros.push(parseInt(Math.random() * 100 + 1));
}


// ESTRUTURA PARA TRABALHAR COM CADA ELEMENTO DO VETOR
for (var j = 0; j < inteiros.length; j++) {

    // Contador de divisores
    var divisores = 0;

    // ESTRUTURA PARA IDENTIFICAR OS DIVISORES DE CADA ELEMENTO DO VETOR
    for (var i = 1; i <= inteiros[j]; i++) {

        // Acrescento em divisores se o resto da divisão é igual 0
        if (inteiros[j] % i == 0) {
            divisores++;
        }

        // Se o número possuir mais do que dois divisores, já não é um número primo
        if (divisores > 2) {
            break;
        }
    }

    // Mostrar o resultado, se é ou não primo.
    if (divisores == 2) {
        console.log(inteiros[j] + " é primo. Posição: " + j);
    } else {
        console.log(inteiros[j] + " NÃO é primo. Posição: " + j);
    }
}