var fruta = prompt("Informe um nome de fruta: ");
var vezes = Number(prompt("Informe o número de vezes: "));

var linha = fruta;

for (var i = 1; i < vezes; i++) {
    linha += (" * " + fruta);
}

console.log(linha);