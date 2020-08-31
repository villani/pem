var deposito = Number(prompt("Informe o valor depositado: "));

if (deposito < 1) {
    console.log("Valor insuficiente.");
} else if (deposito < 1.75) {
    var troco = deposito - 1;
    console.log("Tempo: 30 min");
    console.log("Troco: R$ " + troco.toFixed(2));
} else if (deposito < 3) {
    var troco = deposito - 1.75;
    console.log("Tempo: 60 min");
    console.log("Troco: R$ " + troco.toFixed(2));
} else {
    var troco = deposito - 3;
    console.log("Tempo: 120 min");
    console.log("Troco: R$ " + troco.toFixed(2));
}