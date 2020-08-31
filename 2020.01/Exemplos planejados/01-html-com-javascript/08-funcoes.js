function gerarVetor() {
    var vetor = [];
    for (var i = 0; i < 5; i++) {
        vetor.push(parseInt(Math.random() * 100) + 1);
    }
    var saida = vetor.join(" | ");
    var pResposta = document.all['resposta'];
    pResposta.innerHTML = saida;
}

function gerarVetor2(min, max) {
    var vetor = [];
    for (var i = 0; i < 5; i++) {
        vetor.push(parseInt(Math.random() * (max-min)) + min);
    }
    var saida = vetor.join(" | ");
    var pResposta = document.all['resposta'];
    pResposta.innerHTML = saida;
}

var btnExecutar = document.all['executar'];
btnExecutar.addEventListener('click', gerarVetor);

var btnExecutar2 = document.all['executar2'];
btnExecutar2.addEventListener('click', function() {
    gerarVetor2(5, 10)});