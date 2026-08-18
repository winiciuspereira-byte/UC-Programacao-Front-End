const section = document.querySelector('.countries');

console.time('For of'); // Inicia um timer para mensurar o tempo de execução

for(pais of countries) {
    let div = document.createElement('div');
    let h3  = document.createElement('h3');
    h3.textContent = pais.nome;
    div.style.backgroundColor = pais.cor;

    div.appendChild(h3);
    section.appendChild(div);
}

console.timeEnd('For of'); // Encerra o timer