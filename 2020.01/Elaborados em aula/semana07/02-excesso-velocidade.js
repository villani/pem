var permitida = Number(prompt("Informe a velocidade permitida: "));
var condutor = Number(prompt("Informe a velocidade do condutor: "));

var porcentagem = condutor / permitida;

if (porcentagem < 1) {
    console.log("Sem multa");
} else if (porcentagem <= 1.2) {
    console.log("Multa leve");
} else {
    console.log("Multa grave");
}