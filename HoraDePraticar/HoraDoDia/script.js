function carregar(){
    var img = document.getElementById('imagem')
    var msg = document.getElementById('msg')

    //carregar hora atual
    var dataAgora = new Date()
    var hora = dataAgora.getHours()
    var minuto = dataAgora.getMinutes()
    //var segundo = dataAgora.getSeconds()

    msg.innerHTML = `<p>Agora são <strong>${hora}:${minuto}min!</strong></p>`

    if(hora >0 && hora < 12){
        //BOM DIA
        img.src = '../z_imagens/Manha.png'
        document.body.style.background = '#eab76f'
    }
    else if (hora >= 12 && hora < 18){
        //BOA TARDE
        img.src = '../z_imagens/Tarde.png'
        document.body.style.background = '#d08957'
    }
    else{
        //BOA NOITE
        img.src = '../z_imagens/Noite.png'
        document.body.style.background = '#4e3029'
    }
}