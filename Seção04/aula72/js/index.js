// function retornaFuncao() {
//   const nome = 'Cleverson';
//   return function () {
//     return nome;
//   };
// }

// const funcao = retornaFuncao();
// console.log(funcao);


function retornaFuncao(nome) {
  // const nome = 'Christian';
  return function () {
    return nome;
  };
}

const funcao = retornaFuncao('Cleverson');
const funcao2 = retornaFuncao('Rocha');
console.log(funcao);
console.log(funcao2);

console.log(funcao(), funcao2());