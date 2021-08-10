// Constructor functions (Função construtora)
// Sempre será iniciada por letra maiúscula (convenção, não é regra) 
// Começa com a palavra  NEW
// A palavra new cria um objeto vazio e faz o this apontar para o mesmo e também retorna o objeto criado.

function Pessoa(nome, sobrenome) {

  // Atributos ou métodos privados
  const ID = 123456;
  const metodoInterno = function () {

  };

  // Atributos ou métodos públicos
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metodo = function () {
    console.log(`${this.nome}: sou um método`);
  };
}

const p1 = new Pessoa('Cleverson', 'Rocha');
const p2 = new Pessoa('Matheus', 'Clemente');

console.log(p1.nome);
p2.metodo();