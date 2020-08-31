// CUIDADOS COM AS OPERAÇÕES ARITMÉTICAS
var a = 6;
var b = '2';
var c = 5;

// O interpretador do JavaScript tentará converter texto para número,
// exceto para a adição, onde é realizada a concatenação.
console.log(a - b);
console.log(a / b);
console.log(a * b);
console.log(a + b); // Concatena quando um dos operandos for string (texto)
console.log(a + Number(b)); // forçando a conversão explicitamente.
console.log(c / b);