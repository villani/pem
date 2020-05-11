var numero = Number(prompt("Informe um valor inteiro: "));
var soma = 1;
var divisores = "Divisores de " + numero + ": 1";
for (var i = 2; i < numero; i++) {
    if (numero % i == 0) { // é um divisor.
        soma += i;
        divisores += ", " + i;
    }
}
divisores += " (Soma: " + soma + ").\n";
if (soma == numero) { // o número é perfeito.
    divisores += numero + " é um número perfeito.";
} else {
    divisores += numero + " NÃO é um número perfeito.";
}
console.log(divisores);