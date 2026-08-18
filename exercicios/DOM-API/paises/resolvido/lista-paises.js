console.table(countries);

const section = document.querySelector('.countries');

console.time('For of');

for(pais of countries) {
    let div = document.createElement('div');
    let h3  = document.createElement('h3');
    h3.textContent = pais;

    div.appendChild(h3);
    section.appendChild(div);
}

console.timeEnd('For of');