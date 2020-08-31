var chinchilas = null; 
var anos = null;

do {
    chinchilas = Number(prompt("Informe o número de chinchilas: "));
    if (chinchilas < 2) {
        alert("O número precisa ser maior ou igual a 2.");
        continue;
    }
    anos = Number(prompt("Informe o número de anos: "));    
} while (chinchilas < 2);

var saida = "1º Ano: " + chinchilas + " chinchilas.\n";

for (var i = 2; i <= anos; i++) {
    chinchilas *= 3;
    saida += i + "º Ano: " + chinchilas + " chinchilas.\n";
}
console.log(saida);


