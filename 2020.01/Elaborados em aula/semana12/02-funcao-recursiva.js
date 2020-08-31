function gerarInteiros(qtd, min, max) {
    // Condição de parada.
    if (qtd == 0) return;

    // Recursividade.
    gerarInteiros(--qtd, min, max);

    var num = parseInt(Math.random() * (max-min)) + min;
    console.log(num);    
}

gerarInteiros(5, 5, 10);