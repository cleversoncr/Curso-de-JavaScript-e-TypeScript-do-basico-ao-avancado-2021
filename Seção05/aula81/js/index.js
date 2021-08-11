
//                 0         1        2
// const nomes = ['Eduardo', 'Maria', 'Joana'];
// nomes[2] = 'João';
// delete nomes[2];
// console.log(nomes);

// const nomes = new Array('Eduardo', 'Maria', 'Joana');
// nomes[2] = 'João';
// delete nomes[2];
// console.log(nomes);

// const nomes = ['Eduardo', 'Maria', 'Joana'];
// const novo = [...nomes] //spread operator - copia o array sem gerar vinculo de alteração do array original.

// novo.pop(); // trabalha no final do array.
// const removido = novo.shift(); // trabalha no início do array // desloca todos os outros indices do array.
// nomes.push('Matheus'); // Adciona elementos no final do array.
// nomes.unshift('Pedro'); // Adciona elementos no começo do array // esse procedimento pode prejudicar a performance do programa.

// console.log(nomes, removido);

// console.log(nomes);
// console.log(novo);
// console.log(nomes.length); //tamanho a array.

// const nomes = ['Eduardo', 'Maria', 'Joana', 'Wallace', 'Rosana'];
// const novo = nomes.slice(2, -1);
// console.log(novo);

//Convertendo string em array
// const nome = 'Cleverson Christian da Rocha';
// const nomes = nome.split(' ');
// console.log(nomes);

const nomes = ['Cleverson', 'Christian', 'da', 'Rocha'];
const nome = nomes.join(' ');
console.log(nome);