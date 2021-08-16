//Revisão Objetos

// const pessoa = {
//   nome: 'Cleverson',
//   sobrenome: 'Rocha'
// };

// const chave = 'nome';
// console.log(pessoa[chave]);
// console.log(pessoa['sobrenome']);

// const pessoa1 = new Object();
// pessoa1.nome = 'Cleverson';
// pessoa1.sobrenome = 'Rocha';

// const pessoa2 = {
//   nome: 'Cleverson',
//   sobrenome: 'Rocha'
// };
// delete pessoa1.nome;
// console.log(pessoa1, pessoa2);

const pessoa1 = new Object();
pessoa1.nome = 'Cleverson';
pessoa1.sobrenome = 'Rocha';
pessoa1.idade = 30;
pessoa1.falarNome = function () {
  return (`${this.nome} está falando seu nome.`);
};

pessoa1.getDataNascimento = function () {
  const dataAtual = new Date();
  return dataAtual.getFullYear() - this.idade;
};

console.log(pessoa1.getDataNascimento());
