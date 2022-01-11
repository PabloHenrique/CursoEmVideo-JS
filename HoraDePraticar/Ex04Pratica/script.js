function gerar(){
    var txtn1 = document.getElementById("txtNum")
    var tab = document.getElementById("selectTabuada")
    var n1 = Number(txtn1.value)

    if(txtn1.value.length == 0){
        alert('ERRO! Digite um número!')
    }
    else{
        tab.innerHTML = ''
        for(c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${n1} x ${c} = ${n1*c}`
            tab.appendChild(item)
        }
    }
}