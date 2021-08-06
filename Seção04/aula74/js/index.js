// IIFE -> Immediately Invoked Function Expression (Funções imediatas)
// Todo o conteúdo dentro da função será executado imediatamente e não irá tocar o escopo global
// Mesmo se fora da função existir uma variável com o mesmo nome, não terá qualuer tipo de conflito

// function qualquerCoisa() {
//   console.log(1122334455);
// }

// qualquerCoisa();

// (function () {
//   const nome = 'Cleverson';
//   console.log(nome);
// })();

// const nome = 'Qualquer coisa.';

(function (idade, peso, altura) {
  const sobrenome = 'Rocha';
  function criaNome(nome) {
    return nome = `${nome} ${sobrenome}`;
  }

  function falaNome() {
    console.log(criaNome('Cleverson'));
  }

  falaNome();
  console.log(idade, peso, altura);
})(30, 80, 1.76);