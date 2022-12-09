import JSON from "./listaCandidatos.json" assert { type: "json"};

// Captura do HTML
let exibir = document.getElementById('exibir')
let mostrar = document.getElementById('mostrar')

let input1 = document.getElementById('n1')
let input2 = document.getElementById('n2')

// Variavel da lista dos candidatos.
const list = JSON.listaDeCandidato

input2.addEventListener("focus", monitorarInput2)

// Função de exibir a imagem do candidato antes de confirma o voto.
function monitorarInput2(){

    exibir.style.display = 'none'
    mostrar.style.display = 'block'

    if (input2.value !== '') {
        let input = input1.value + input2.value
        let c = 0
        
        list.forEach((x) => {
            if(x.numero === input){
                let img = document.createElement("IMG")
                img.src = `img/${x.foto}`
                img.style.width = "396px"
                img.style.height = "250px"
                mostrar.appendChild(img)
            }else{
                c += 1
            }

            if(c === list.length){
                let img = document.createElement("IMG")
                img.src = "img/voto_nulo.png"
                img.style.width = "396px"
                img.style.height = "250px"
                mostrar.appendChild(img)
            }
        })
    }else {
        exibir.style.display = 'flex'
        mostrar.style.display = 'none'
    }
}
