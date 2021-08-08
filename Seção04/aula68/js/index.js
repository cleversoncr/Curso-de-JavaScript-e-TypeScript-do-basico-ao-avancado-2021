// Maneiras de declarar funções

// Function hoisting
// Nãoi faz a mínima diferençã se eu chamo a função antes ou depois dela, o engine do JS eleva a função para o topo. 
// falaOi();

// function falaOi() {
//   console.log('Oie');
// }
// falaOi();

// Firsta-class ogjects (As funções são objetos de primeira classe)
// Function expression

// const nome = 'Cleverson';

// const souUmDado = function () {
//   console.log('Sou um dado.');
// }
// souUmDado();

// Arrow function

// const funcaoArrow = () => {
//   console.log('Sou uma arrow function');
// }
// funcaoArrow();

// Dentro de um objeto

const obj = {
  falar: function () {
    console.log('Estou falando...');
  }
}

obj.falar();