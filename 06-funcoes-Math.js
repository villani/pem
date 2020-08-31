// CRIANDO UM PROGRAMA QUE GERA VALORES ALEATÓRIOS

// - DEFININDO VALOR MÁXIMA DA SEQUÊNCIA
const MAX = 100;

// - DEFININDO VALOR MÍNIMO DA SEQUÊNCIA
const MIN = 50;

// - GERANDO VALOR ALEATÓRIO DENTRO DO INTERVALO DEFINIDO
var aleatorio = parseInt(Math.random() * (MAX - MIN)) + MIN;

// - EXIBINDO O VALOR GERADO
console.log(aleatorio);