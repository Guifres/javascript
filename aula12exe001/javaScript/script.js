function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} Horas.`
    if (hora >= 0 && hora < 12) {
        // Bom dia
        img.src = 'imagens/foto-manha.png'
        document.body.style.background = '#b8a28d'
    } else if (hora >= 12 && hora <= 18) {
        // Boa Tarde
        img.src = 'imagens/foto-tarde.png'
        document.body.style.background = '#b15e22'
    } else {
        //BOa noite 
        img.src = 'imagens/Noite.png'
        document.body.style.background = '#704968'
    }
}