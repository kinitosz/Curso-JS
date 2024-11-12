var agora = new Date()
var hora = agora.getHours()
var turno = null

if(hora >= 8 && hora <= 12){
    console.log('Bom dia!')
    turno = 'manhã'
} else if (hora > 12 && hora <= 18){
    console.log('Boa tarde!')
    turno = 'tarde'
} else if (hora > 18) {
    console.log('Boa noite!')
    turno = 'noite'
}

console.log(`Agora são exatamente ${hora} horas da ${turno}!`)