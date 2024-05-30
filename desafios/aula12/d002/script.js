function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('ERRO! Verifique os dados e tente novamente.')
    }
    else{
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gen = ''
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            gen = 'homem'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'imagens/crianca-h.png')
            } else if (idade < 20){
                img.setAttribute('src', 'imagens/jovem-h.png')
            } else if(idade < 40){
                img.setAttribute('src', 'imagens/homem.png')
            } else if (idade < 60){
                img.setAttribute('src', 'imagens/homem-mais-velho.png')
            } else {
                img.setAttribute('src', 'imagens/velho.png')
            }
        }
        else if (fsex[1].checked){
            gen = 'mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'imagens/crianca-m.png')
            } else if (idade < 20){
                img.setAttribute('src', 'imagens/jovem-m.png')
            } else if(idade < 40){
                img.setAttribute('src', 'imagens/mulher.png')
            } else if (idade < 60){
                img.setAttribute('src', 'imagens/mulher-mais-velha.png')
            } else {
                img.setAttribute('src', 'imagens/velha.png')
            }
        }
        res.innerHTML = `Detectamos um(a) ${gen} de ${idade} anos.`
        res.appendChild(img)
    }
}