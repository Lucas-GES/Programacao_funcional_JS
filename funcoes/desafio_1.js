// function desafio(a, b, c){
//     if(typeof c === 'function'){
//         return c(a, b)
//     }

//     return a + b + c
// }

// const multiplicar = (a, b) => a * b
// const somar = (a, b) => a + b
// const subtrair = (a, b) => a - b

// desafio(3, 4, 5)
// desafio(3, 7, multiplicar)
// desafio(3, 7, somar)
// desafio(3, 7, subtrair)

function somar(a){
    return function(b){
        return function(c){
            return a + b + c
        }
    }
}

function calcular(x){
    return function(y){
        return function(fn){
            return fn(x, y)
        }
    }
}

const multiplicar = (a, b) => a * b
const somar2 = (a, b) => a + b
const subtrair = (a, b) => a - b

// console.log(somar(3)(4)(5))
// console.log(calcular(3)(7)(multiplicar))
// console.log(calcular(3)(7)(somar2))
// console.log(calcular(3)(7)(subtrair))
