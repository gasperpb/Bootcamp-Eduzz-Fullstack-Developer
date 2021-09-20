let order = []
let clickedOder = []
let score = 0

//0 - verde
//1- vermelho
//2 - amarelo
//3 - azul


const blue = document.querySelector('.blue')
const red = document.querySelector('.red')
const yellow = document.querySelector('.yellow')
const green = document.querySelector('.green')
// Cria uma ordem aleatorias de cores.
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4)
    order[order.length] = colorOrder
    clickedOder = []
    for (let i in order) {
        let elementColor = createColorElement(order[i])
        lightColor(elementColor, Number(i) + 1)

    }

    // acende a próxima cor 
    let lightColor = (element, number) =>
        number = number * 500
    setTimeout(() => {
        element.classList.add('selected')
    }, number - 250)
    setTimeout(() => {
        element.classList.remove('selected')
    })

    // checa se os botões clicados no jogo é o mesmo gerado.
    let chekOrder = () => {
        for (let i in clickedOder) {
            if (clickedOder[i] != order[i]) {
                gameOver()
                break
            }
        }
        if (clickedOder.length == order.length) {
            alert('pontuação: ${score}\n Você acertou! Iniciando a próximo nível!')
            nextLevel()
        }
    }
}
// função para o click do usuario
let click = (color) => {
    clickedOder[clickedOder.length] = color
    createColorElement(color).classList.add('selected')

    setTimeout(() => {
        createColorElement(color).classList.remove('selected')
        chekOrder()
    }, 250)
}

//função que retorna a cor
let createColorElement = (color) => {
    if (color == 0) {
        return green
    } else if (color == 1) {
        return red
    } else if (color == 2) {
        return yellow
    } else if (color == 3) {
        return blue
    }

}

//função par ao proximo nivel de jogo
let nextLevel = () => {
    score++
    shuffleOrder()
}
//Função para game over
let gameOver = () => {
    alert(' Pontuação: ${score}!n Você perdeu o jogo!\n Clique em OK para iniciar um novo jogo')
    order = []
    clickedOder = []
    playGame()

}
// Função inicio do jogo
let playGame = () => {
    alert('Bem vindo ao Gênesis! Iniciando o Jogo')
    score = 0

    nextLevel()

}

//eventos
green.onclick = () => click(0)
red.onclick = () => click(1)
yellow.onclick = () => click(2)
blue.onclick = () => click(3)

playGame()