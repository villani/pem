function verificarParidade() {
    var inputInteiro = document.all['inteiro'];
    var inteiro = Number(inputInteiro.value);
    var pResposta = document.all['resposta'];

    if (inteiro % 2 == 0) {
        pResposta.style.color = 'blue';
        pResposta.textContent = "Resposta: " + inteiro + " é Par";
    } else {
        pResposta.style.color = 'red';
        pResposta.textContent = "Resposta: " + inteiro + " é Ímpar";
    }
}