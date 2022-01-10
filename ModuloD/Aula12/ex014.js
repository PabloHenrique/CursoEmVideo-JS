var agora = new Date()
var diaSemana = agora.getDay() //Obter o dia da semana

/*
    Domingo = 0
    Segunda = 1
    Terça = 2
    Quarta = 3
    Quinta = 4
    Sexta = 5
    Sábado = 6
*/

switch(diaSemana){
    case 0:
        console.log(`Hoje é domingo!`)
        break
    case 1:
        console.log(`Hoje é Segunda-feira!`)
        break
    case 2:
        console.log(`Hoje é Terça-feira!`)
        break
    case 3:
        console.log(`Hoje é Quarta-feira!`)
        break
    case 4:
        console.log(`Hoje é Quinta-feira!`)
        break
    case 5:
        console.log(`Hoje é Sexta-feira!`)
        break
    case 6:
        console.log(`Hoje é Sábado!`)
        break
    default:
        console.log(`Erro!`)
        break
}

//console.log(`O dia da semana é: ${diaSemana}`)