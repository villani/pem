// DECLARANDO UM VETOR - Criando um conjunto de variáveis.
var presidentes = ['Bolsonaro', 'Temer', 'Dilma', 'Lula', 'FHC'];
var pessoa = ['Leonardo', 35, 1.77];


// ACESSANDO UM ELEMENTO DESSE CONJUNTO
console.log('Altura: ' + pessoa[2]);            // - É necessário informar o índice do elemento
console.log("Primeiro: " + presidentes[0]);     // - Recuperando o primeiro elemento do conjunto
console.log("Último: " + presidentes[5 - 1]);   // - Recuperando o último elemento do conjunto
console.log("Último: " + presidentes[presidentes.length - 1]); // - último elemento do conjunto

// OBTENDO DETALHES DOS TIPOS ARMAZENADOS EM CADA ELEMENTO
console.log("Tipo da altura: " + (typeof pessoa[2]));   // number
console.log("Tipo do nome: " + (typeof pessoa[0]));     // string
console.log("Tipo do vetor: " + (typeof pessoa));       // object
console.log("Vetor é um Array: " + (pessoa instanceof Array) ); // É um Array? true
console.log("Vetor é um Audio: " + (pessoa instanceof Audio) ); // É um Audio? false
