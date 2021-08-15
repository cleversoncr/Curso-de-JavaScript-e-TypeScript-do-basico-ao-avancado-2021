const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const total = numeros.reduce(function (acumulador, valor, indice, array) {
//   if (valor % 8 === 0) acumulador.push(valor);
//   return acumulador;
// }, []);
// console.log(total);

// const total = numeros.reduce(function (acumulador, valor) {
//   acumulador.push(valor * 2);
//   return acumulador;
// }, []);
// console.log(total);

// const total = numeros.reduce(function (acumulador, valor) {
//   acumulador += valor;
//   return acumulador;
// }, 0);
// console.log(total);


const pessoas = [
  { nome: 'Cleverson', idade: 43 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 },
  { nome: 'Ed', idade: 62 }
];

const maisVelha = pessoas.reduce(function (acumulador, valor) {
  if (acumulador.idade > valor.idade) return acumulador;
  return valor;
});

console.log(maisVelha);