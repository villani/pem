function verificarVelocidade() {
    var inputPermitida = document.all['permitida'];
    var inputCondutor = document.all['condutor'];
    var pResposta = document.all['resposta'];

    var permitida = Number(inputPermitida.value);
    var condutor = Number(inputCondutor.value);
    var proporcao = condutor / permitida;

    if (proporcao <= 1) {
        pResposta.style.fontStyle = 'normal';
        pResposta.style.fontWeight = 'normal';
        pResposta.textContent = 'Sem multa.';
    } else if (proporcao <= 1.2) {
        pResposta.style.fontStyle = 'italic';
        pResposta.style.fontWeight = 'normal';
        pResposta.textContent = 'Multa leve.';
    } else {
        pResposta.style.fontStyle = 'normal';
        pResposta.style.fontWeight = 'bold';
        pResposta.textContent = 'Multa grave!';
    }
}