var a = Number(prompt("Informe um valor inteiro: "));
var b = Number(prompt("Informe outro valor inteiro: "));

var saida = "";
if (a > b) {
    if (a % b == 0) {
        saida += "Sao Multiplos";
    } else {
        saida += "Nao sao Multiplos";
    }
} else {
    if (b % a == 0) {
        saida += "Sao Multiplos";
    } else {
        saida += "Nao sao Multiplos";
    }
}
console.log(saida);