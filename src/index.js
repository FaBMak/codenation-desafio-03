'use strict'

const fibonacci = () => {
    const arrayFibonacci = [0, 1];
    let ultimaPosicao = 0, anteriorPosicao = 0, soma = 0;

    while (soma < 350) {
        ultimaPosicao = arrayFibonacci.length - 1
        anteriorPosicao = ultimaPosicao - 1
        
        soma = arrayFibonacci[ultimaPosicao] + arrayFibonacci[anteriorPosicao]
        
        arrayFibonacci.push(soma)
    }
    return arrayFibonacci
}

const isFibonnaci = (num) => {
    const arrayFibonacci = fibonacci()
    return arrayFibonacci.includes(num)
}

module.exports = {
    fibonacci,
    isFibonnaci
}
