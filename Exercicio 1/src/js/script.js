var agora = new Date()
var hora = agora.getHours()
var corFundo = document.querySelector('body')
var textHora = document.querySelector('h2')
var imgFundo = document.querySelector('img')
textHora.innerHTML = `Agora são ${hora} horas!`

if(hora >= 8 && hora <= 12){
    corFundo.style.backgroundColor = 'rgb(255, 187, 85)'
    imgFundo.setAttribute('src', 'src/image/manha.png')
    


} else if (hora > 12 && hora <= 18){
    corFundo.style.backgroundColor = 'rgb(255, 115, 33)'
    imgFundo.setAttribute('src', 'src/image/tarde.png')

} else if (hora < 8 || hora > 18) {
    corFundo.style.backgroundColor = 'rgb(32, 65, 255)'
    imgFundo.setAttribute('src', 'src/image/noite.png')
}

switch(hora){

    case 0:
        textHora.innerHTML = 'Agora é meia-noite'
    break

    case 1:
        textHora.innerHTML = 'Agora é 1 hora'
    break

}