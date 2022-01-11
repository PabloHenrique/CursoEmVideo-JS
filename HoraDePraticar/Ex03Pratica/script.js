function contar(){
    var txtn1 = document.getElementById('txtBeg')
    var txtn2 = document.getElementById('txtEnd')
    var txtpasso = document.getElementById('txtPasso')

    n1 = Number(txtn1.value)
    n2 = Number(txtn2.value)
    passo = Number(txtpasso.value)
    
    if(n1 == 0 || n2 == 0 || passo == 0){
        alert("ERRO! Informe todos os campos para realizar a contagem!")
    }else{
        res.innerHTML = "Iniciando contagem: "
        while(n2 >= n1){
            res.innerHTML += (`${n1} ➡ `)
            n1 += passo
        }
    }
}
