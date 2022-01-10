function verificar(){
    var data = new Date()
    var ano = data.getFullYear()

    var formAno = document.getElementById('txtAno')
    var res = document.getElementById('res')

    //Conversão
    var numFormAno = Number(formAno.value)

    //Se o ano for 'vazio' ou ano atual
    if(numFormAno == 0){
        window.alert('Dado inválido! Campo em branco!')
    }
    else if(numFormAno > ano){
        window.alert('Dado inválido! Ano superior ao ano atual!')
    }
    else{
        var formSex = document.getElementsByName('radsex')
        // [0] = Masculino
        // [1] = Feminino
        var idade = ano - numFormAno
        
        //Ver idade calculada
        //res.innerHTML = `Idade calculada: ${idade}`

        var radius = document.querySelectorAll("input[type='radio']")
        var genr = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(radius[0].checked){
            genr = 'Masculino'
            if(idade >= 0 && idade <= 12){
                //Criança M
                img.setAttribute('src', '../imagens/bebe-m.png')
            }
            else if(idade > 12 && idade <= 20){
                //Jovem M
                img.setAttribute('src','../imagens/jovem-m.png')
            }
            else if(idade > 20 && idade < 50){
                //Adulto M
                img.setAttribute('src','../imagens/adulto-m.png')
            }
            else{
                //Idoso M
                img.setAttribute('src','../imagens/idoso-m.png')
            }
        }
        else if(radius[1].checked){
            genr = 'Feminino'
            if(idade >= 0 && idade <= 12){
                //Criança F
                img.setAttribute('src', '../imagens/bebe-f.png')
            }
            else if(idade > 12 && idade <= 20){
                //Jovem F
                img.setAttribute('src','../imagens/jovem-f.png')
            }
            else if(idade > 20 && idade < 50){
                //Adulto F
                img.setAttribute('src','../imagens/adulto-f.png')
            }
            else{
                //Idoso F
                img.setAttribute('src','../imagens/idoso-f.png')
            }
        }

        //Idade + Gênero
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos ${genr} com ${idade} anos.</p><br>`
        res.appendChild(img) //Adicionar elemento
    }
}