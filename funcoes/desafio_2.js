const carrinho = [
    { nome: 'Caneta', qtd:10, preco: 7.99, fragil: true },
    { nome: 'Impressora', qtd:1, preco: 649.50, fragil: true },
    { nome: 'Caderno', qtd:4, preco: 27.10, fragil: false },
    { nome: 'Lapis', qtd:3, preco: 5.82, fragil: false },
    { nome: 'Tesoura', qtd:1, preco: 19.20, fragil: true },
]

const isFragil = item => item.fragil

const getTotal = item => item.qtd * item.preco

const getMedia = (acc, el) => {
    const novaQtde = acc.qtd + 1
    const novoTotal = acc.total + el
    console.log(acc, el)
    return {
        qtd: novaQtde,
        total: novoTotal,
        media: novoTotal / novaQtde
    }
}

const mediaInicial =  { qtd: 0, total: 0, media: 0}

// 1. fragil: true
const media = carrinho
    .filter(isFragil)
    .map(getTotal)
    .reduce(getMedia, mediaInicial)

console.log(media)