function ciraCalculadora() {
  return {
    // atributos
    display: document.querySelector('.display'),

    // métodos
    inicia() {  //Sempre que quiser referenciar uma chave dentro do objeto, é necessário utilizar a palavra this.
      this.cliqueBotoes();
      this.pressionaEnter()
    },

    pressionaEnter() {
      this.display.addEventListener('keyup', e => {
        if (e.keyCode === 13) {
          this.realizaConta();
        }
      });
    },

    realizaConta() { // a função EVAL é uma função perigosa com relção a segurança do código, pois permite a interação de scripts maliciosos. 
      let conta = this.display.value;
      try {
        conta = eval(conta);
        if (!conta) {
          alert('Conta inválida');
          return;
        }
        this.display.value = String(conta);
      } catch (e) {
        alert('Conta inválida');
        return;
      }
    },

    clearDisplay() {
      this.display.value = '';
    },

    apagaUm() {
      this.display.value = this.display.value.slice(0, -1);
    },

    cliqueBotoes() {
      document.addEventListener('click', e => { // ao utilizar uma arrow function, vc mantem a referência do this
        const element = e.target;

        if (element.classList.contains('btn-num')) {
          this.btnParaDisplay(element.innerText);
        }
        if (element.classList.contains('btn-clear')) {
          this.clearDisplay();
        }
        if (element.classList.contains('btn-del')) {
          this.apagaUm();
        }

        if (element.classList.contains('btn-eq')) {
          this.realizaConta();
        }

      });
    },

    btnParaDisplay(valor) {
      this.display.value += valor;
    }
  };
}

const calculadora = ciraCalculadora();
calculadora.inicia();