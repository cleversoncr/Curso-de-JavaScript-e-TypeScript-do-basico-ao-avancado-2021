/*
Todas as expressões precisam ser verdadeiras para que retorne um valor verdadeiro.
&& -> false && true -> false "o valor mesmo"

Todas as expressões precisam ser falsas para retornar um valor falso.
|| -> true || false -> vai retornar "o valor verdadeiro".

Valores false em JS (Qualquer coisa diferente disso, avalia como true)
false
0
'' "" ``
null / undefined
NaN
*/

// function falaOi() {
//     return 'Oi';
// }

// let vaiExecutar = '';
// console.log(vaiExecutar && falaOi());

// console.log(0 || false || null || 'Cleverson' || true);

const a = 0; 
const b = null;
const c = 'false'; //Retronará esse resultado, pois é uma string
const d = false;
const e = NaN;

console.log(a || b || c || d || e);