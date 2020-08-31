function cobrarCliente() {
    var inputValor = document.all['valor'];
    var inputMinutos = document.all['minutos'];
    var pResposta = document.all['resposta'];

    var valor = Number(inputValor.value);
    var minutos = Number(inputMinutos.value);
    var tempoTotal = Math.ceil(minutos / 15);

    pResposta.innerHTML = '<strong> Valor a pagar: R$ ' + 
            (valor * tempoTotal).toFixed(2) + '</strong>';
}