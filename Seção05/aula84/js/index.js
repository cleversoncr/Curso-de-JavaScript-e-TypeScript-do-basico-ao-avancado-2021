/*
Filter - Filtrando o array -> Sempre irá retornar um array, com a mesma quantidade de elementos
ou menos.

Map - Mapeando o array

Reduce - Reduzindo o array

*/

//Retorne os números maiores que 10
// const numeros = [5, 50, 80, 1, 2, 3, 5, 6, 7, 11, 15, 22, 27];

// function callbackFilter(valor) {
//   return valor > 10;
// }
// const numerosFiltrados = numeros.filter(callbackFilter);

// const numerosFiltrados = numeros.filter(valor => valor > 10);
// console.log(numerosFiltrados);

// const numerosFiltrados = numeros.filter((valor, indice, array) => {
//   console.log(valor, indice, array);
//   return valor > 10;
// });
// console.log(numerosFiltrados);



//Retorne as pessoas que tem o nome com 5 letras ou mais
//Retorne as pessoas com mais de 50 anos
//Retorne as pessoas cujo nome termina com a

const pessoas = [
  { nome: 'Cleverson', idade: 43 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 },
  { nome: 'Ed', idade: 62 }
];

const pessoas5letras = pessoas.filter(obj => obj.nome.length >= 5);

const pessoas50anos = pessoas.filter(function (obj) {
  return obj.idade > 50;
});

const pessoasTa = pessoas.filter(obj => {
  return obj.nome.toLowerCase().endsWith('a');
});

console.log(pessoas5letras);
console.log(pessoas50anos);
console.log(pessoasTa);
