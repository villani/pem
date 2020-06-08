function gerarVetor(qtd, min, max) {

    var vetor = [];
    for (var i = 0; i < qtd; i++) {
        var num = parseInt(Math.random() * (max - min)) + min;
        vetor.push(num);
    }
    
    // Definindo o retorno de uma função
    return vetor;

}

var vetor = gerarVetor(5, 5, 10);
alert(vetor.join(' - '));

// Escrevendo no documento.
document.write(vetor.join(' - '));