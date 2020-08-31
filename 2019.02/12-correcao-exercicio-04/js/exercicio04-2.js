function calcularChinchilas() {
    // RECUPERA OS CAMPOS DE ENTRADAS (INPUTS)
    var inputChinchilas = document.all['chinchilas'];
    var inputAnos = document.all['anos'];
    
    // OBTÉM OS VALORES DOS INPUTS
    var chinchilas = Number(inputChinchilas.value);
    var anos = Number(inputAnos.value);

    // VALIDA OS DADOS DO FORMULÁRIO
    if (chinchilas < 2) {
        alert('O número de chinchilas deve ser maior do que 2!');
        inputChinchilas.focus();
        return; // Interrompe execução do restante da função.
    }

    // RECUPERA O PARÁGRAFO DA RESPOSTA
    var pResposta = document.all['resposta'];
    var resposta = '';
    for (var i = 1; i <= anos; i++) {
        resposta += i + 'º ano: ' + chinchilas + ' chinchilas.<br>';
        chinchilas *= 3; // chinchilas = chinchilas * 3;
    }
    pResposta.innerHTML = resposta;
}