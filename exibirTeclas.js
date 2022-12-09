// Captura dos elementos HTML
let inp1 = document.getElementById("n1")
let inp2 = document.getElementById("n2")
let n1 = document.getElementById('um')
let n2 = document.getElementById('dois')
let n3 = document.getElementById('tres')
let n4 = document.getElementById('quatro')
let n5 = document.getElementById('cinco')
let n6 = document.getElementById('seis')
let n7 = document.getElementById('sete')
let n8 = document.getElementById('oito')
let n9 = document.getElementById('nove')
let n0 = document.getElementById('zero')

// Função para exibir valor dos botões nos dois inputs
function exibirNum1(id){
    let valor = Number(id.value)
    if(inp1.value === ''){
        inp1.focus()
        inp1.value = valor
    }else{
        inp2.value = valor 
        inp2.focus()
    }
    document.getElementById('retorno').innerHTML = ''
}

// Evento click dos botões da urna.
n1.addEventListener('click', ()=> exibirNum1(n1))
n2.addEventListener('click', ()=> exibirNum1(n2))
n3.addEventListener('click', ()=> exibirNum1(n3))
n4.addEventListener('click', ()=> exibirNum1(n4))
n5.addEventListener('click', ()=> exibirNum1(n5))
n6.addEventListener('click', ()=> exibirNum1(n6))
n7.addEventListener('click', ()=> exibirNum1(n7))
n8.addEventListener('click', ()=> exibirNum1(n8))
n9.addEventListener('click', ()=> exibirNum1(n9))
n0.addEventListener('click', ()=> exibirNum1(n0))





