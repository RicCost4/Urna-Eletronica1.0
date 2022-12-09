// Capturar e exibir o relogio mais data na urna

function data() {
    let capValores  = new Date()
    let semana = capValores.getDay()
    let dia = capValores.getDate()
    let mes = capValores.getMonth()
    let ano = capValores.getFullYear()
    let hora = capValores.getHours()
    let min = capValores.getMinutes()
    let seg = capValores.getSeconds()

    if(dia < 10){
        dia = "0"+dia
    }
    if(hora < 10){
        hora = "0"+hora
    }
    if(min < 10){
        min = "0"+min
    }
    if(seg < 10){
        seg = "0"+seg
    }
    let horas = `${hora}:${min}:${seg}`
    let data = `${dia}/${mes}/${ano}`


    if( semana === 0){
        var exibirData = `DOM ${data}  ${horas}`
    } else if(semana === 1){
        var exibirData = `SEG ${data}  ${horas}`
    } else if(semana === 2){
        var exibirData = `TER ${data}  ${horas}`
    } else if(semana === 3){
        var exibirData = `QUA ${data}  ${horas}`
    } else if(semana === 4){
        var exibirData = `QUI ${data}  ${horas}`
    } else if(semana === 5){
        var exibirData = `SEX ${data}  ${horas}`
    } else if(semana === 6){
        var exibirData = `SAB ${data}  ${horas}`
    }
    document.getElementById("time").value=exibirData;
}

let time = setInterval(data, 1000);