let valores = [1 , 2, 3, 4, 5, 6]

//Maneira tradicional
/*
for(c = 0; c < valores.length; c++){
    console.log(`A posição [${c}] tem o valor de: ${valores[c]}`)
}
*/

for(let c in valores){
    console.log(`A posição [${c}] tem o valor de: ${valores[c]}`)
}

//Para buscar um valor (-1 == não encontrado)
console.log(`\n${valores}`)
let busca = valores.indexOf(5)
if(busca == -1){
    console.log(`\nO valor não foi encontrado :/`)
}
else{
    console.log(`\nO valor 3 está na posição ${busca}`)
}
