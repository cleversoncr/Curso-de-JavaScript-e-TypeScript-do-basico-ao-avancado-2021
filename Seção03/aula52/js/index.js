// 52 For - Clássico - Estruturas de repetição

//console.log('Linha 0');
//console.log('Linha 1');
//console.log('Linha 2');
//console.log('Linha 3');
//console.log('Linha 4');
//console.log('Linha 5');

// i++ === i = i+1
// Para pular de 10 em 10 === i += 10

// for (let i = 0; i <= 5; i++) {
//   console.log(`Linha ${i}`);
// }

// for (let i = 0; i <= 10; i++) {
//   // const par = i % 2 === 0;
//   const par = i % 2 === 0 ? 'par' : 'impar';
//   console.log(i, par);
// }


const frutas = ['Maçã', 'Pêra', 'Uva', 'Caqui', 'Carambola'];
// console.log(frutas[1]);
// console.log(frutas.length);
for (let i = 0; i < frutas.length; i++) {
  console.log(`Índice ${i}`, frutas[i]);
}