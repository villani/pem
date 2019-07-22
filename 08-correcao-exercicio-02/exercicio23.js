function calcularPromocao() {
    var inputProduto = document.all['produto'];
    var inputPreco = document.all['preco'];
    var pResposta = document.all['resposta'];

    var preco = Number(inputPreco.value);
    var preco3 = preco * 0.5;
    var total = preco * 2 + preco3;

    pResposta.innerHTML = inputProduto.value + ' - Promoção: Leve 3 por'
        + ' R$ ' + total.toFixed(2) + '<br>O terceiro sai por R$ '
        + preco3.toFixed(2);
}