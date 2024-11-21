function tabuada() {
    let txtn = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    let boxtab = document.getElementById('box-tab')
    if(txtn.value.length == 0){
        window.alert('Digite o número da tabuada que você deseja')
    } else{
        tab.innerHTML = ''
        boxtab.removeAttribute('style', 'display: none')
        let num = Number(txtn.value)
        for(let c = 1; c <= 10; c++){

            

            // Colocando uma tag dentro de um bloco atrávez de uma variável
            let item = document.createElement('option')

            // Colocando texto dentro da tag
            item.text = `${num} x ${c} = ${num*c}`

            // Colocando valor dentro da tag
            item.value = `v${c}`

            // Selecionado em qual bloco colocar a tag
            tab.appendChild(item)

        }

    }
}