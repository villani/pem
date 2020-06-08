// DEFININDO UMA FUNÇÃO
function saudar() {
    console.log("Bem vindo à disciplina de Programação em Microinformática.");
}

function gerarVetor() {
    // Definir um vetor.
    var vetor = [];

    // Acrescentar cinco inteiros aleatórios.
    for (var i = 0; i < 5; i++) {
        var num = parseInt(Math.random() * 100) + 1;
        vetor.push(num);
    }

    // Exibir o vetor gerado.
    console.log(vetor.join('\t'));
}

// ATIVANDO A FUNÇÃO DEFINIDA
saudar();

for (var i = 0; i < 5; i++) {
    gerarVetor();
}