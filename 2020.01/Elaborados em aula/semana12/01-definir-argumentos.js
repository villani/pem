// DEFINIR UMA FUNÇÃO QUE RECEBE ARGUMENTOS
// - Definir uma função que gerar um vetor com inteiros aleatórios
// - Os argumentos definem a faixa de valores aleatórios e a quantidade de elementos aleatórios
function gerarVetor(qtd, max, min) {

    var vetor = [];
    for (var i = 0; i < qtd; i++) {
        var num = parseInt(Math.random() * (max - min)) + min;
        vetor.push(num);
    }
    console.log(vetor.join(' | '));

}

// ATIVAR UMA FUNÇÃO QUE NECESSITA DE ARGUMENTOS
gerarVetor(15, 100, 50);
gerarVetor(5, 1000, 500);