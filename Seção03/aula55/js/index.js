// For in => lê os índices ou chaves do objeto

// const frutas = ['Pera', 'Maçã', 'Uva'];

// for (let i = 0; i < frutas.length; i++) {
//   console.log(frutas[i]);
// }

// for (let i in frutas) {
//   console.log(frutas[i]);
// }

const pessoa = {
  nome: 'Cleverson',
  sobrenome: 'Rocha',
  idade: 30
};

for (let i in pessoa) {
  console.log(i, pessoa[i]);
}