const continentes = ["América", "África"];

const section = document.querySelector('.countries');

countries
	.filter((pais) => continentes.includes(pais.localizacao.regiao.nome))
	.forEach((pais) => {
		const sigla = pais.id['ISO-3166-1-ALPHA-2'];
		const capital = pais.governo?.capital?.nome ?? 'Não informada';

		const artigo = document.createElement('article');

		const bandeira = document.createElement('img');
		bandeira.src = `https://flagcdn.com/w80/${sigla.toLowerCase()}.png`;
		bandeira.alt = `Bandeira de ${pais.nome.abreviado}`;
		bandeira.width = 80;

		const nome = document.createElement('h3');
		nome.textContent = pais.nome.abreviado;

		const lista = document.createElement('dl');
		const detalhes = [
			['Sigla', sigla],
			['Região', pais.localizacao.regiao.nome],
			['Capital', capital],
		];

		detalhes.forEach(([rotulo, valor]) => {
			const dt = document.createElement('dt');
			const dd = document.createElement('dd');

			dt.textContent = rotulo;
			dd.textContent = valor;
			lista.appendChild(dt);
			lista.appendChild(dd);
		});

		artigo.appendChild(bandeira);
		artigo.appendChild(nome);
		artigo.appendChild(lista);
		section.appendChild(artigo);
	});
