var n = []

function adicionar(){
    let textnum = document.getElementById('num')
    let num = Number(textnum.value)
    let res = document.getElementById('res')

    if(textnum.value.length == 0){   
        window.alert('A caixa não pode estar vazia, preencha com um dos números indicados')
    } else if (num > 100 || num < 1){
        window.alert('Número inválido, preencha com um número entre 1 e 100')
        
    } else if(num == n){
        window.alert('Os valores não podem ser repetidos')

    } else {
        let tab = document.getElementById('tab')
        let item = document.createElement('option')
        

        item.text = `O número ${num} foi adicionado` 
        tab.appendChild(item)
        n.push(num)
        res.innerHTML = `${n}`
    }


}