function validar(){

    var data = new Date()
    var year = data.getFullYear()
    var imgBox = document.getElementById('image')
    var img = document.querySelector('#image > img')
    var txt = document.querySelector('#txt')
    var txtNas =  document.querySelector('#anoNas')
    var anoNas = Number(txtNas.value)

    if(anoNas == 0 || anoNas > year){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else{
        
        var idade = year - anoNas
        var sex = document.getElementsByName('radsex')
        var genero = ''
        if(sex[0].checked){
            genero = 'Homem'
            if(idade < 6){
                img.src = 'src/image/bebemenino.jpg'
                txt.innerHTML = `Você é um bebê de ${idade} anos de idade!`
    
            }else if(idade <= 12){
                img.src = 'src/image/criancamenino.jpg'
                txt.innerHTML = `Você é uma criança de ${idade} anos de idade!`
        
            }else if(idade <= 18){
                img.src = 'src/image/menino.jpg'
                txt.innerHTML = `Você é um adolescente de ${idade} anos de idade!`
        
            }else if(idade <= 60){
                img.src = 'src/image/adulto.jpg'
                txt.innerHTML = `Você é um homem de ${idade} anos de idade!`
        
            }else{
                img.src = 'src/image/idoso.jpg'
                txt.innerHTML = `Você é um senhor de ${idade} anos de idade!`
        
            }
        } else if(sex[1].checked){
            genero = 'Mulher'
            if (idade < 6){
                img.src = 'src/image/bebemenina.jpg'
                txt.innerHTML = `Você é uma bebê de ${idade} anos de idade!`
    
            }else if(idade <= 12){
                img.src = 'src/image/criancamenina.jpg'
                txt.innerHTML = `Você é uma criança de ${idade} anos de idade!`
        
            }else if(idade <= 18){
                img.src = 'src/image/menina.jpg'
                txt.innerHTML = `Você é uma adolescente de ${idade} anos de idade!`
        
            }else if(idade <= 60){
                img.src = 'src/image/adulta.jpg'
                txt.innerHTML = `Você é uma mulher de ${idade} anos de idade!`
        
            }else{
                img.src = 'src/image/idosa.jpg'
                txt.innerHTML = `Você é uma senhora de ${idade} anos de idade!`
        
            }
        }

        

        
        imgBox.removeAttribute('style', 'display: none')
    }

    
}
