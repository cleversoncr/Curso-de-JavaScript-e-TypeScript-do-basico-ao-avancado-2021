//IEEE 754-2008 - Padrão de precisão JS

let num1 = 0.7;
let num2 = 0.1;

// console.log(num1.toString() + num2); // O toString converter um número para uma string. Mas o número original continua sendo number.
// num1 = num1.toString(); // dessa forma, a variável number é convertida definitivamente para string.
// console.log(num1.toString(16)); // converte o valor para binário, hexadecimal...
// console.log(num1.toFixed(2)); // determina quantas casas decimais serão exibidas após a vírgula.
// console.log(Number.isInteger(num1)); //retorna um valor booleano VF se o número é inteiro ou não.

num1 += num2; // 0.8
num1 += num2; // 0.9
num1 += num2; // 1.0

// num1 = parseFloat(num1.toFixed(2));

console.log(num1);
console.log(Number.isInteger(num1));