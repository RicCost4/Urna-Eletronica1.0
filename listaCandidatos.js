//Exibir uma colinha para saber quais candidatos votar

import JSON from "./listaCandidatos.json" assert { type: "json"};

let listar = document.getElementById('listaCadidato')

const lista = JSON.listaDeCandidato

lista.forEach((x) => {
    let l = document.createElement('p')
    l.innerText = `N°: ${x.numero}, Nome: ${x.nome} - Partido: ${x.Partido}`
    listar.appendChild(l)
})