function getRank(wins, loses){
    result = wins - loses
    return result
}

let wins = 53
let loses = 27
let rank = ""
result = getRank(wins, loses)

/*Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal*/

if( result < 10 ){
    rank = "Ferro"
} else if (result > 10 && result <= 20){
    rank = "Bronze"
} else if (result > 20 && result <= 50){
    rank = "Prata"
} else if (result > 50 && result <= 80){
    rank = "Ouro"
} else if (result > 80 && result <= 90){
    rank = "Diamante"
} else if (result > 90 && result <= 100){
    rank = "Diamante"
} else {
    rank = "Imortal"
}

console.log("O Herói tem de saldo de %d está no nível de %s", result, rank)

