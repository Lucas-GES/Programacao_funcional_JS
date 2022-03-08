const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'callback.txt')

function exibirConteudo(_, conteudo){
    console.log(conteudo.toString())
}

console.log("Inicio...")
fs.readFile(caminho, exibirConteudo)
fs.readFile(caminho, (_, conteudo) => console.log(conteudo.toString()))
console.log("Fim...")

console.log("Inicio...")
const conteudo = fs.readFileSync(caminho)
console.log(conteudo.toString())
console.log("Fim...")