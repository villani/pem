console.log("Mostrando todos os números perfeitos de 1 a 1000");
var resultado = "Números perfeitos: 1";
for(var i = 2; i < 1000; i++) {
    var soma = 1;
    for (var j = 2; j < i; j++) {
        if (i % j == 0) { // é um divisor.
            soma += j;
        }
    }
    if (soma == i) { // o número é perfeito.
        resultado += ", " + i;
    }
}
console.log(resultado);