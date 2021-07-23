/*
Operadores Lógicos
&& - > AND -> E
|| -> OR -> OU
! -> NOT -> NÂO
*/
// && - Caso qualquer uma das alternativas seja falsa, todo o resultado retornará falso.
// Tabela verdade
//  true    false   - false
//  true    true    - true
//  false   false   - false
//  false   true    - false

// const expressaoAnd = false && true;
// console.log(expressaoAnd);

// || - Caso apenas uma expressão seja true, todo a expressão retornará true.
// Tabela verdade
//  true    false   - true
//  true    true    - true
//  false   false   - false
//  false   true    - true

// const expressaoOr = false || true;
// console.log(expressaoOr);

// Inverte o valor da expressão.
// Tabela verdade
//  !true   - false
//  !false  - true

const expressaoOr = !false;
console.log(expressaoOr);