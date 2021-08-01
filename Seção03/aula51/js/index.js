// 51 Atribuição via desestruturação (Objetos)

const pessoa = {
  nome: 'Cleverson',
  nome2: 'Christian',
  sobrenome: 'Rocha',
  idade: 43,
  // cpf: '054621555-87',
  endereco: {
    rua: 'Av Brasil',
    numero: 320
  }
};

// const nome = pessoa.nome;
// console.log(nome)

//Atribuição via desestruturação
const {
  nome,
  nome2: teste,
  sobrenome,
  idade,
  cpf = '',
  endereco: { rua, numero }
} = pessoa;
console.log(nome, teste, sobrenome, idade, cpf, rua, numero);