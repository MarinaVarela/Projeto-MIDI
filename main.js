
function playSound(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);
    if ( elemento && elemento.localName === 'audio') {
        elemento.play();
    } else {
        alert('Elemento não foi encontrado ou seletor inválido')
    }
}

const listaTeclas = document.querySelectorAll('.tecla');

// laço para ativação dos sons 
for (let i = 0; i < listaTeclas.length; i++) {
    const tecla = listaTeclas[i];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; // template string

    tecla.onclick = function () {
        playSound(idAudio)
    };

    // Config para clique e ativação do som nas teclas do teclado
    tecla.onkeydown = function (event) {
        if (event.code === 'Space' || event.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}
