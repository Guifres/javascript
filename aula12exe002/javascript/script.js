function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.langth == 0 || Number(fano.value) > ano) {
        window.alert('[ERROR] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'imagens/homem-bebe.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/homem-jovem.png')
            } else{
                img.setAttribute('src', 'imagens/homem-velho.png')
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'imagens/mulher-bebe.png')

            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/mulher-jovem.png')

            } else{
                img.setAttribute('src', 'imagens/mulher-velha.png')

            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}