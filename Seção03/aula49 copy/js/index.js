/*
  DIFERENÇAS ENTRE VAR E LET


  - Aula 19

  - Quando crio uma variável utilizando var, caso utilize o mesmo nome de variável logo abaixo,
  o primeiro valor será perdido.
*/


//************** EXEMPLO 1


//primeira declaração
// var nome = 'Luiz';
//segunda declaração utilizando o mesmo nome
// var nome = 'Cleverson'
// console.log(nome);

//***********

//primeira declaração
// let troca = 'Luiz';
//segunda declaração retorna o erro "SyntaxError: Identifier 'troca' has already been declared"
//inclusive, já aparece o sublinhado no nome da variável, acusando que o mesmo já está em uso
// let troca = 'Cleverson';
// console.log(troca);

/*
  - Aula 49

  - Let tem escopo de bloco {... bloco}
      Sendo assim, quando crio uma variável LET fora de um bloco e logo em seguida repetir o mesmo nome de variável
      dentro de um bloco trocando seu valor, o resultado exibido será o da variável LET dentro do respectivo bloco.
  - var só tem escopo de função
      Ou seja, o valor da variável var será o ultimo valor declarado.

*/


//************** EXEMPLO 2


// const verdadeira = true;

// let nome = 'Cleverson'; // criando
// var nome2 = 'Rocha';

// if (verdadeira) {
//   // let nome = 'Christian' // criando uma nova variável, mesmo que ela utilize um nome de variável já em uso
//   // console.log(nome, nome2);

//   if (verdadeira) {
//     // let nome = 'Outra coisa';
//     console.log(nome, nome2);
//   }
// }

//**************

// const verdadeira = true;

// let nome = 'Cleverson'; // criando
// var nome2 = 'Rocha'; // criando

// var nome2 = 'Thiago'; // redeclarada
// // console.log(nome, nome2);

// if (verdadeira) {
//   // let nome = 'Christian' // criando
//   // var nome2 = 'Matheus'; // redeclarada

//   if (verdadeira) {
//     let nome = 'Outra coisa';
//     // var nome2 = 'Ronaldo'; // redeclarando
//     // console.log(nome, nome2);
//   }
//   console.log(nome, nome2);
// }


//************** EXEMPLO 3


/*
  Ecoopo de função
  - Uma função protege as variáveis dentro dela.
*/

// var sobrenome = 'Rocha'; // Eu posso chamar uma variável que está fora da function.

// function falaOi() {
//   var nome = 'Cleverson';
//   // console.log('Oi');
//   console.log(nome);
//   console.log(sobrenome);
// }

// // console.log(nome); // Esse console.log não exibe o resultado que está dentro da function.
// falaOi();


//************** EXEMPLO 4


/*
Quando escrevemos o código colocando a console.log antes da declaração da função, ocorre o erro
undefined. Isso acontece porque o motor do JS leu o código e percebeu que a variável foi declarada
posteriormente. Então o JS eleva a declaração (hoisting). Seria o mesmo que declarar a variável
no cabeçalho da página.
Se não houvesse uma declaração posterior, o erro seria: "ReferenceError: sobrenome is not defined".
*/

// console.log(sobrenome);

// var sobrenome = 'Cleverson';

/*
O mesmo não ocorre com a variável let, sendo exibido na tela o erro: "ReferenceError: Cannot access
'sobrenome' before initialization at Object"
*/

// console.log(sobrenome);
// let sobrenome = 'Cleverson';

// let sobrenome = 'Cleverson';
// console.log(sobrenome);

//*************

// console.log(sobrenome);
// const sobrenome = 'Cleverson';

const sobrenome = 'Cleverson';
console.log(sobrenome);