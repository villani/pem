// OBTENDO DADOS DO USUÁRIO
var entrada = prompt("Informe um valor inteiro: ");

// PROCESSANDO A ENTRAADA
//var soma = entrada + 13; // SOMA ou CONCATENA
var soma = Number(entrada) + 13; // SOMA ou CONCATENA

// EXIBINDO O RESULTADO PROCESSADO
console.log(soma)
console.log(soma.toFixed(4));
console.log('R$ ' + soma.toFixed(2));