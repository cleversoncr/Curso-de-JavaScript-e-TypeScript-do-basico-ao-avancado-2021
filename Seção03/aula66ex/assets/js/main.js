function relogio() {

  function horaReferencia(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pr-BR', {
      hour12: false,
      timeZone: 'UTC'
    });
  }

  const relogio = document.querySelector('.relogio');
  let segundos = 0;
  let timer;

  function start() {
    timer = setInterval(function () {
      segundos++;
      relogio.innerHTML = horaReferencia(segundos);
    }, 1000);
  }

  document.addEventListener('click', function (e) {
    const elemento = e.target;

    if (elemento.classList.contains('zerar')) {
      relogio.classList.remove('pausado')
      clearInterval(timer);
      relogio.innerHTML = '00:00:00';
      segundos = 0;
    }

    if (elemento.classList.contains('iniciar')) {
      relogio.classList.remove('pausado');
      clearInterval(timer);
      start();
    }

    if (elemento.classList.contains('pausar')) {
      relogio.classList.add('pausado');
      clearInterval(timer);
    }
  });
}

relogio();
