//Demostração de função para calcular fatorial

//!5 = 5 x 4 x 3 x 2 x 1
function fat(numero){
    let fatorial =1
    for(c = numero; c > 1; c--){
        fatorial *= c // fatorial = fatorial * c
    }
    return fatorial
}

console.log(fat(5))