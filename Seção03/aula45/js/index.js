// Operação ternária

const pontuacaoUsuario = 1000;

// (condição) ? valor para verdadeiro : valor para falso;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';
console.log(nivelUsuario);

// if (pontuacaoUsuario >= 1000) {
//   console.log('Usuário VIP');
// } else {
//   console.log('Usuário normal');
// }

const corUsuario = null;
const corPadrao = corUsuario || 'Preta';
console.log(corPadrao);