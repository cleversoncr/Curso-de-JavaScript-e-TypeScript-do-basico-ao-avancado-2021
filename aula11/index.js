/**
 * Aritméticos
 * + Adição e Concatenação
 * - / *
 *  ** Potenciação
 * % Resto da divisão
 * Precedencia -> () ** * / % + -
 * Incremento ++
 * Decremento --
 * Atribuição *= -= += **=
 */

let contador = 1
contador++; // contador = contador + 1
console.log(contador);

const passo = 50;
let contador2 = 0;
contador2 += passo; // contador = contador + 50
console.log(contador2)

const num1 = 5;
const num2 = 10;
console.log(num1 + num2);

// NaN - Not a number

const num3 = 10
const num4 = parseInt('5');
const num5 = parseFloat('5.2');
const num6 = Number(0.2);
console.log(num3 + num4 + num5 + num6);