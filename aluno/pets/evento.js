const titulo = document.getElementById('titulo-pet');
const imagem = document.getElementById('imagem-pet');

const btnCao = document.getElementById('btn-cao');
const btnGato = document.getElementById('btn-gato');
const btnBackground = document.getElementById('btn-background');

const fotoCao = 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=400';
const fotoGato = 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=400';

const cores = ['#06F874', '#8706f8', '#f806a7', '#f80606', '#f8e806'];

btnCao.addEventListener('click', () => {
    imagem.src = fotoCao;
    imagem.alt = 'Foto de um cachorro';
    titulo.textContent = 'Cachorrinho';
});

btnGato.addEventListener('click', () => {
    imagem.src = fotoGato;
    imagem.alt = 'Foto de um gato';
    titulo.textContent = 'Gatinho';
});

btnBackground.addEventListener('click', () => {
    const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
    document.body.style.backgroundColor = corAleatoria;
});
