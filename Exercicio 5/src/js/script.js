let n = []
let res = document.getElementById('res')
let lista = document.querySelector('select#tab')
let textnum = document.getElementById('num')

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true 
    } else {
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true 
    } else {
        return false
    }
}

function adicionar(){
  
    if(textnum.value.length == 0){   
        window.alert('A caixa não pode estar vazia, preencha com um dos números indicados')
    } else if (!isNumero(textnum.value)){
        window.alert('Número inválido, preencha com um número entre 1 e 100')
        
    } else if(inLista(textnum.value , n)){
        window.alert('Os valores não podem ser repetidos')

    } else {
        res.innerHTML = ''
        let item = document.createElement('option')
        item.text = `O número ${textnum.value} foi adicionado` 
        lista.appendChild(item)
        n.push(Number(textnum.value))
    }
    textnum.value = ''
    textnum.focus()
}

function analisar(){
    
    if(n.length < 2){
        window.alert('Para analisar é necessário que tenham dois ou mais números adicionados')
    } else {
        
        let soma = 0
        let maior = n[0]
        let menor = n[0]
        for(let pos in n){
            soma += n[pos] 
            if(n[pos] > maior)
               maior = n[pos]
            if(n[pos] < menor)
               menor = n[pos]  
        }

        let media = 0
        media = soma / n.length

        res.innerHTML = 
        `Ao todo temos ${n.length} número cadastrados. <br><br>
        O maior número informado foi ${maior}. <br><br>
        O menor número informado foi ${menor}. <br><br>
        Somando todos os valores temos ${soma}. <br><br>
        A média dos valores digitados é ${media}.`
    }

}