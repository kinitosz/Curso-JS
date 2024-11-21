
function contar(){

    let txtinc = document.getElementById('inc')
    let txtfim = document.getElementById('fim')
    let txtpas = document.getElementById('pas')
    let res = document.getElementById('res')

    if(txtinc.value.length == 0 || txtfim.value.length == 0 || txtpas.value.length == 0){
        window.alert('[ERRO] Estão faltando alguns dados para a contagem, verifique e tente novamente')
        res.innerHTML = 'Tente novamente!'
    } else{
        res.innerHTML = 'Contando: <br>'
        var inc = Number(txtinc.value)
        var fim = Number(txtfim.value)
        var pas = Number(txtpas.value)
        if(pas == 0){
            window.alert('Passo Inválido, a contagem será feita considerando passo: 1')
            pas = 1
        }
        if(inc < fim){
            for(let contador = inc; contador <= fim; contador += pas){
                res.innerHTML += `${contador} -> `
            }
            res.innerHTML += `\u{1F3C1}`

        } else if (inc > fim){
            for(let contador = inc; contador >= fim; contador -= pas){
                res.innerHTML += `${contador} -> `
            }
            res.innerHTML += `\u{1F3C1}`

        } else {
            window.alert('Os números de inicio e fim não podem ser iguais')
        }

    }
}