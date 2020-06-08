// DEFININDO A FUNÇÃO gerarVetor e identificarPrimos
function gerarVetor(qtd, min, max) {

    var vetor = [];
    for (var i = 0; i < qtd; i++) {
        var num = parseInt(Math.random() * (max - min)) + min;
        vetor.push(num);
    }
    
    // Definindo o retorno de uma função
    return vetor;

}

function identificarPrimos(inteiros) {
    var saida = "";

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
            saida += inteiros[j] + " é primo. Posição: " + j + "\n";
        } else {
            saida += inteiros[j] + " NÃO é primo. Posição: " + j + "\n";
        }
    }
    return saida;
}

// ATIVANDO FUNÇÕES
var vetor = gerarVetor(5, 1, 10);
var resposta = identificarPrimos(vetor);

console.log(vetor.join(' - '));
console.log(resposta);