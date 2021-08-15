const numeros = [5, 50, 80, 1, 2, 3, 5, 6, 7, 11, 15, 22, 27];

// const numerosEmDobro = numeros.map(function (valor) {
//   return valor * 2
// });
// console.log(numerosEmDobro);

// const numerosEmDobro = numeros.map(valor => valor * 2);
// console.log(numerosEmDobro);

const pessoas = [
  { nome: 'Cleverson', idade: 43 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 },
  { nome: 'Ed', idade: 62 }
];

// const nomes = pessoas.map(function (obj) {
//   return obj.nome;
// });
// console.log(nomes);

// const nomes = pessoas.map(obj => obj.nome);
// console.log(nomes);

// const idades = pessoas.map(function (obj) {
//   return { idade: obj.idade };
// });
// console.log(idades);

// const idades = pessoas.map(obj => ({ idade: obj.idade }));
// console.log(idades);

// const comIds = pessoas.map(function (obj, indice) {
//   const newObj = { ...obj };
//   newObj.id = (indice + 1) * 1000;
//   return newObj;
// });

// console.log(comIds);