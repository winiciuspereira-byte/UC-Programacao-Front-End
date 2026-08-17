const section = document.querySelector('.countries');

function corDoTexto(corFundo) {
	const r = parseInt(corFundo.slice(1, 3), 16);
	const g = parseInt(corFundo.slice(3, 5), 16);
	const b = parseInt(corFundo.slice(5, 7), 16);
	const luminancia = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

	return luminancia > 0.5 ? '#000000' : '#FFFFFF';
}

countries.forEach((pais) => {
	const div = document.createElement('div');
	const h3 = document.createElement('h3');

	h3.textContent = pais.nome;
	div.style.backgroundColor = pais.cor;
	h3.style.color = corDoTexto(pais.cor);
	div.appendChild(h3);
	section.appendChild(div);
});
