var valid = document.querySelector('#valid')
var agora = new Date()
var year = agora.getFullYear()
var imgBox = document.getElementById('image')
var img = document.querySelector('#image > img')
var txt = document.querySelector('#txt')

function validar(){

    var txtNas =  document.querySelector('#anoNas')
    var anoNas = Number(txtNas.value)
    var idade = year - anoNas
    txt.innerHTML = `Você tem ${idade} anos de idade!`
    imgBox.removeAttribute('style', 'display: none')

    if (idade < 6){
        img.src = 'src/image/bebemenina.jpg'

    } else if(idade >= 7 && idade <= 12){
        img.src = 'src/image/criancamenina.jpg'

    } else if(idade > 12 && idade <= 18){
        img.src = 'src/image/menina.jpg'

    } else if(idade > 18 && idade <= 60){
        img.src = 'src/image/adulta.jpg'

    } else {
        img.src = 'src/image/idosa.jpg'

    }

}
