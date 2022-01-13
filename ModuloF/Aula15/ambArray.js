//Ambiente  de teste
let num = [5, 8, 2, 9, 3]

num.push(1)

num.sort()
/* 
5 = 0
8 = 1
2 = 3
9 = 4
3 = 5 
*/

//num[6] = 3 - Criar uma posição no vetor
//num.push(7) - Criar um vetor independentemente da posição
//num.length - Ver quantas posições
//num.sort() - Colocar os elementos em ordem crescente

console.log(`Nosso vetor é o: ${num}`)
console.log(`O vetor tem ${num.length} posições!`)
console.log(`O primeiro valor é: ${num[0]}`)

for(c = 1; c < 6; c++){
    console.log(`O ${c}° valor é: ${num[c]}`)
}
