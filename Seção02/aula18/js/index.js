const pessoa1 = {
    nome: 'Cleverson',
    sobrenome: 'Rocha',
    idade: 43,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
    }
};

pessoa1.fala();

// function criaPessoa(nome, sobrenome, idade) {
//     return { nome, sobrenome, idade };
// return {
//     nome: nome,
//     sobrenome: sobrenome,
//     idade: idade
// };
// }

// const pessoa1 = criaPessoa('Cleverson', 'Rocha', 43);
// const pessoa2 = criaPessoa('Katia', 'Souza', 44);
// const pessoa3 = criaPessoa('Jozimar', 'Candido', 46);

// console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome);


// const pessoa1 = {
//     nome: 'Cleverson',
//     sobrenome: 'Rocha',
//     idade: '43'
// }


// const nome01 = 'Cleverson'
// const sobrenome01 = 'Rocha'
// const idade01 = '43'

// const nome02 = 'Katia'
// const sobrenome02 = 'Souza'
// const idade02 = '44'