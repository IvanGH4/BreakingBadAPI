const container = document.querySelector('.container');
const url = 'https://www.breakingbadapi.com/api/characters';

const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data[0]);
    for(let i = 0; i < 12; i++) {
        let div = document.createElement('div');
        div.innerHTML = `
            <h2>Character: ${data[i].name}</h2>
            <img src="${data[i].img}" alt="${data[i].name}"/>
            <p>Nickname: ${data[i].nickname}</p>
            <p>Ocupation: ${data[i].occupation[0]}</p>
            <small>Interpreted by: ${data[i].portrayed}</small>
        `;
        div.classList.add('card');
        container.appendChild(div);
    }
}

window.addEventListener('load', fetchData);