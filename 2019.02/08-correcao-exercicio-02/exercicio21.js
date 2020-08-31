function calcularPromocao() {
    var inputMedicamento = document.all['medicamento'];
    var inputPreco = document.all['preco'];
    var pResposta = document.all['resposta'];

    var preco = Number(inputPreco.value);
    var total = preco * 2;
    total = Math.floor(total);

    pResposta.innerHTML = 'Promoção de ' + inputMedicamento.value;
    pResposta.innerHTML += '<br>Leve 2 por R$ ' + total.toFixed(2);
}