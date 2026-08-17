const section = document.querySelector('.countries');

countries.forEach((pais) => {
	const div = document.createElement('div');
	const h3 = document.createElement('h3');

	h3.textContent = pais;
	div.appendChild(h3);
	section.appendChild(div);
});
