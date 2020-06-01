// Receber os dados de entrada dos clubes.
var clubes = prompt("Informe o nome de cinco clubes separados por \",\": ");
clubes = clubes.split(",");

// Receber os dados de entrada dos pontos de cada clube.
var pontos = prompt("Informe os pontos de cada clube separados por \",\": ");
pontos = pontos.split(",");

// Usar 'bubble sort' para ordenar ambos os vetores.
for (var n = pontos.length; n > 0; n--) {

    for (var i = 0; i < n - 1; i++) {

        var atual = parseInt(pontos[i]);
        var prox = parseInt(pontos[i + 1]);
        if (atual < prox) {
            var aux = pontos[i];
            pontos[i] = pontos[i + 1];
            pontos[i + 1] = aux;

            aux = clubes[i];
            clubes[i] = clubes[i + 1];
            clubes[i + 1] = aux;
        }
    }
}

// Apresentar as saídas solicitadas.
var saida1 = "Clubes (pontos): " + clubes[0] + "(" + pontos[0] + ")";
for (var i = 1; i < clubes.length; i++) {
    saida1 += ", " + clubes[i] + "(" + pontos[i] + ")";
}
console.log(saida1);
console.log("Crescente: " + clubes.join(", "));
clubes.reverse();
console.log("Decrescente: " + clubes.join(", "));