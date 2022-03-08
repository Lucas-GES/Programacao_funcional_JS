
function exec(fn, a, b){
    return fn(a, b)
}

const subtrair = (w, z) => w - z

const somarNoTerminal = (x, y) => console.log(x + y)
const subtrairNoTerminal = (w, z) => console.log(w - z)

exec(somarNoTerminal, 56, 38)
exec(subtrairNoTerminal, 182, 27)

const r = exec(subtrair, 50, 25)
console.log(r)

setInterval(() => {console.log('Exec...')}, 1000)