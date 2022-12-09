import JSON from "./listaCandidatos.json" assert { type: "json"};

// Captura do HTML
let bra = document.getElementById('branco')
let cor = document.getElementById('corrige')
let conf = document.getElementById('confirma')
let valorInp1 = document.getElementById('n1')
let valorInp2 = document.getElementById('n2')
let apurar = document.getElementById('footer')
let retorno = document.getElementById('retorno')
let audio = document.querySelector('audio')

// Captura da lista dos candidatos + ciração dos arrays branco, nulo e variavel da contagem de votos
let candidatos = JSON.listaDeCandidato
let branco = []
let nulo = []
let totVotos = 0

// Evento click de corrigir o voto
cor.addEventListener('click', () => {
    valorInp1.value = ''
    valorInp1.focus()
    valorInp2.value = ''
    retorno.innerHTML = ''
    document.getElementById('exibir').style.display = 'flex'
    document.getElementById('mostrar').innerHTML = ''
    document.getElementById('mostrar').style.display = 'none'
})

// Evento click do voto em Branco
bra.addEventListener('click', () => {
    branco.push(1)
    totVotos += 1

    audio.play()
    valorInp1.value = ''
    valorInp1.focus()
    valorInp2.value = ''
    document.getElementById('exibir').style.display = 'flex'
    document.getElementById('mostrar').innerHTML = ''
    document.getElementById('mostrar').style.display = 'none'
    retorno.innerHTML = `Voto <strong>BRANCO</strong> Computado!!!`
})

// Evento click de confirma o voto no candidato ou voto nulo
conf.addEventListener('click', () => {    
    let numDigitado = valorInp1.value + valorInp2.value
    let v = 0

    candidatos.map((candidato) => {
        
        if(candidato.numero === numDigitado){ //confirma voto no canditado
            candidato.Votos.push(1)
            totVotos += 1
            audio.play()
            retorno.innerHTML = `Voto <strong>${candidato.nome}</strong> Computado!!!`
        }else{
            v += 1
        }

        if(v === candidatos.length){ //confirma voto nulo
            nulo.push(1)
            totVotos += 1
            audio.play()
            retorno.innerHTML = `Voto <strong>NULO</strong> Computado!!!`
        }
    })

    valorInp1.value = ''
    valorInp1.focus()
    valorInp2.value = ''
    
    
    document.getElementById('exibir').style.display = 'flex'
    document.getElementById('mostrar').innerHTML = ''
    document.getElementById('mostrar').style.display = 'none'
})

// Evento de apuração dos votos na urna.
apurar.addEventListener('click', () => {
    document.getElementById('footer').innerHTML = ''
    
    for(let i = 0; i < candidatos.length; i++){ //Ordenação da lista com Insert-Short
        let key_intem = candidatos[i]
        let j = i - 1
        while(j >= 0 && candidatos[j].Votos.length > key_intem.Votos.length){
            candidatos[j+1] = candidatos[j]
            j -= 1
        }
        candidatos[j+1] = key_intem
    }

    document.getElementById('centro').innerHTML = `<h1>Apuração dos votos</h1><p>Votos Brancos: [${branco.length}]</p><p>Votos Nulos: [${nulo.length}]</p>`

    candidatos.forEach((candidatos) => {
        let p = document.createElement('p')
        p.innerText = `Votos: [${candidatos.Votos.length}] - ${candidatos.nome}, Partido: ${candidatos.Partido} N°: ${candidatos.numero}`
        document.getElementById('centro').appendChild(p)
    })

    let porcentagem = candidatos[4].Votos.length*100/totVotos

    alert(`O vencedor das eleições é ${candidatos[4].nome} com ${Math.round(porcentagem)}% dos votos`)


    document.getElementById('footer').innerHTML = `<button onclick="location.reload()">Reiniciar Votação</button>` 
})