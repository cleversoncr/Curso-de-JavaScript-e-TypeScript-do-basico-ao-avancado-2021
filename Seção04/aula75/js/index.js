// Factory Functions (Função fábrica)

// function criaPessoa(nome, sobrenome) {
//   return {
//     nome,
//     sobrenome,
//     // quando uma função está dentro de outra função, ela é chamada de método
//     fala: function (assunto) {
//       return `${nome} está ${assunto}.`;
//     }
//   };
// }

// const p1 = criaPessoa('Cleverson', 'Rocha');
// console.log(p1.fala('falando sobre JS'));


// function criaPessoa(nome, sobrenome, altura, peso) {
//   return {
//     nome,
//     sobrenome,
//     fala(assunto) {
//       return `${this.nome} está ${assunto}.`;
//     },
//     altura: altura,
//     peso: peso,
//     imc() {
//       const indice = this.peso / (this.altura ** 2);
//       return indice.toFixed(2);
//     }
//   };
// }

// const p1 = criaPessoa('Cleverson', 'Rocha', 1.76, 80);
// console.log(p1.imc());
// console.log(p1.fala('falando sobre JS'));


// function criaPessoa(nome, sobrenome, altura, peso) {
//   return {
//     nome,
//     sobrenome,
//     fala(assunto) {
//       return `${this.nome} está ${assunto}.`;
//     },
//     altura: altura,
//     peso: peso,
//     //Getter
//     get imc() {
//       const indice = this.peso / (this.altura ** 2);
//       return indice.toFixed(2);
//     }
//   };
// }

// const p1 = criaPessoa('Cleverson', 'Rocha', 1.76, 80);
// console.log(p1.nome);
// console.log(p1.sobrenome);
// console.log(p1.imc);


function criaPessoa(nome, sobrenome, altura, peso) {
  return {
    nome,
    sobrenome,
    //Getter
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },

    //Setter
    set nomeCompleto(valor) {
      valor = valor.split(' ');
      this.nome = valor.shift();
      this.sobrenome = valor.join(' ');
      console.log(valor);
    },

    fala(assunto) {
      return `${this.nome} está ${assunto}.`;
    },

    altura: altura,
    peso: peso,
    //Getter
    get imc() {
      const indice = this.peso / (this.altura ** 2);
      return indice.toFixed(2);
    }
  };
}

const p1 = criaPessoa('Cleverson', 'Rocha', 1.76, 80);
p1.nomeCompleto = 'Katia Sandra Souza';
console.log(p1.nomeCompleto);