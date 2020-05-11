var input = prompt("Informe os parâmetros: ");
var lines = input.split(" ");


var a = Number(lines.shift());
var b = Number(lines.shift());

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