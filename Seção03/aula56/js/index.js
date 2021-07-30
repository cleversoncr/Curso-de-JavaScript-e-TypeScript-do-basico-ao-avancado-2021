// const nome = 'Cleverson Rocha';

// for (let i = 0; i < nome.length; i++) {
//   console.log(nome[i]);
// }

// for (let i in nome) {
//   console.log(nome[i]);
// }

const nome = ['Goiaba', 'Pera'];

for (let valor of nome) {
  console.log(valor);
}

for (let i = 0; i < nome.length; i++) {
  console.log(nome[i]);
}

for (let i in nome) {
  console.log(nome[i]);
}

//For clássico - Geralmente com interáveis (array ou strings)
//For in - Retorna o índice ou chave (strig, array ou objetos)
//For of - Retorna o valor em si (iteráveis, arrays ou strings)