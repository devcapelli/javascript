function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        img.src = 'imagens/manha-nova.png'
        document.body.style.backgroundColor = '#D7A65E'
    }
    else if (hora >= 12 && hora < 18){
        img.src = 'imagens/tarde-nova.png'
        document.body.style.backgroundColor = '#F26D3D'
    }
    else{
        img.src = 'imagens/noite-nova.png'
        document.body.style.backgroundColor = '#0C1531'
    }
}