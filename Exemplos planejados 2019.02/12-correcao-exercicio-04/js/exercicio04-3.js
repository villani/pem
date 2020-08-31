function verificarNumero() {
    // OBTENHO OS ELEMENTOS HTML
    var inputNumero = document.all['numero'];
    var pResposta = document.all['resposta'];

    // OBTENHO OS VALORES DESSES ELEMENTOS
    var numero = Number(inputNumero.value);
    var resposta = 'Divisores de ' + numero + ': 1';
    var soma = 1;
    for (var i = 2; i < numero; i++) {
        if (numero % i == 0){
            resposta += ', ' + i;
            soma += i;
        }
    }
    resposta += '(Soma = ' + soma + ')<br>';
    if (soma == numero) {
        resposta += numero + ' é um número perfeito.';
    } else {
        resposta += numero + ' NÃO é um número perfeito.';
    }
    pResposta.innerHTML = resposta;
}