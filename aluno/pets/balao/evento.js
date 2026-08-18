const balao = document.getElementById('balao');

const TAMANHO_INICIAL = 100;
const TAMANHO_MAXIMO = 300;

let tamanhoAtual = TAMANHO_INICIAL;
balao.style.fontSize = tamanhoAtual + 'px';

function controlarBalao(evento) {
    if (evento.key !== 'ArrowUp' && evento.key !== 'ArrowDown') {
        return;
    }

    evento.preventDefault();

    if (evento.key === 'ArrowUp') {
        tamanhoAtual = tamanhoAtual * 1.1;

        if (tamanhoAtual > TAMANHO_MAXIMO) {
            balao.textContent = '💥';
            document.removeEventListener('keydown', controlarBalao);
            return;
        }
    } else {
        tamanhoAtual = tamanhoAtual * 0.9;
    }

    balao.style.fontSize = tamanhoAtual + 'px';
}

document.addEventListener('keydown', controlarBalao);
