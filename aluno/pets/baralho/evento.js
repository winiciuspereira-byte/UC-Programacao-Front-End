const imgBaralho = document.getElementById('baralho');
const areaCartaSorteada = document.getElementById('carta-sorteada');

imgBaralho.addEventListener('click', () => {
    if (baralho.length === 0) {
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * baralho.length);
    const [cartaSorteada] = baralho.splice(indiceAleatorio, 1);

    const imgCarta = document.createElement('img');
    imgCarta.src = cartaSorteada.imagem;
    imgCarta.alt = `${cartaSorteada.valor} de ${cartaSorteada.naipe}`;
    imgCarta.title = imgCarta.alt;

    areaCartaSorteada.appendChild(imgCarta);
});
