let num = document.getElementById('txtNum')
let lista = document.getElementById('lista')
let res = document.querySelector('div#res')
let numVetor = []

function isNum(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }
    else{
        return false
    }
}

function trueLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    }
    else{
        return false
    }
}

function add(){
    //validação
    if(isNum(num.value) && !trueLista(num.value, numVetor)){
        numVetor.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''//Apagar o finalizar
    }
    else if(num == 0){
        alert(`ERRO! Digite um valor maior que 0!`)
    }
    else{
        alert(`ERRO! Número inválido ou já adicionado!`)
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if(numVetor.length == 0){
        alert('ERRO! Adicione valores antes de finalizar!')
    }
    else{
        let total = numVetor.length
        let maior = numVetor[0]
        let menor = numVetor[0]
        let soma = 0
        let media = 0

        for(let ver in numVetor){
            soma = soma + numVetor[ver]
            if(numVetor[ver] > maior){
                maior = numVetor[ver]
            }
            if(numVetor[ver] < menor){
                menor = numVetor[ver]
            }
        }

        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p>Foram adicionados ${total} números.</p>`
        res.innerHTML += `<p>O maior valor é: ${maior}!</p>`
        res.innerHTML += `<p>E o menor é: ${menor}!</p>`
        res.innerHTML += `<p>Somando todos os valores, temos: ${soma}!</p>`
        res.innerHTML += `<p>A média dos valores é: ${media}!</p>`
    }
}