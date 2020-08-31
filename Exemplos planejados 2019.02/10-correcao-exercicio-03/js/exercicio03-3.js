function calcularPermanencia() {
    var inputDepositado = document.all['depositado'];
    var pResposta = document.all['resposta'];

    var depositado = Number(inputDepositado.value);

    if (depositado < 1) {
        pResposta.style.fontWeight = 'normal';
        pResposta.textContent = 'Valor insuficiente.';
    } else if (depositado < 1.75) {
        pResposta.style.fontWeight = 'bold';
        pResposta.innerHTML = 'Tempo: 30 min.<br>';
        var troco = depositado - 1;
        pResposta.innerHTML += 'Troco: R$ ' + troco.toFixed(2);
    } else if (depositado < 3) {
        pResposta.style.fontWeight = 'bold';
        pResposta.innerHTML = 'Tempo: 60 min.<br>';
        var troco = depositado - 1.75;
        pResposta.innerHTML += 'Troco: R$ ' + troco.toFixed(2);
    } else {
        pResposta.style.fontWeight = 'bold';
        pResposta.innerHTML = 'Tempo: 120 min.<br>';
        var troco = depositado - 3;
        pResposta.innerHTML += 'Troco: R$ ' + troco.toFixed(2);
    }    
}