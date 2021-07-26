// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date
// const tresHoras = 60 * 60 * 3 * 1000;
// const umDIa = 60 * 60 * 24 * 1000;
// const data = new Date(0 + tresHoras + umDIa); // A data 0 é contada a partir do marco zero 01/01/1970 Timestamp unix ou época unix

// const data = new Date(2019, 3, 20, 15, 14, 27, 500);

// const data = new Date('2019-04-20T20:15:05.500');
// console.log('Dia', data.getDate());
// console.log('Mês', data.getMonth() + 1);
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Minuto', data.getMinutes());
// console.log('Seg', data.getSeconds());
// console.log('ms', data.getMilliseconds());
// console.log('Dia semana', data.getDay());
// console.log(data.toString());

// console.log(Date.now());

function zeroAEsquerda(num) {
  return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
  const mes = zeroAEsquerda(data.getMonth() + 1);
  const dia = zeroAEsquerda(data.getDate());
  const ano = zeroAEsquerda(data.getFullYear());
  const hora = zeroAEsquerda(data.getHours());
  const min = zeroAEsquerda(data.getMinutes());
  const seg = zeroAEsquerda(data.getSeconds());

  return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}
const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);