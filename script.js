let randomgenerator = document.querySelector('.randomizador')
let display = document.querySelector('.telaLista')
let tentativaUsuario = document.querySelector('#tentativa')
let tentativaBotao = document.querySelector('.tentativaBotao')
let exibePontuacao = document.querySelector('#pontuacao')

let pontos = 0

let listaCores = [
  'amarelo',
  'vermelho',
  'azul',
  'verde',
  'rosa',
  'preto',
  'branco',
  'laranja',
  'violeta',
  'marrom',
  'cinza',
]

//IDEIA PRA DEIXAR MAIS ELABORADO: AO INVES DE TENTAR ADIVINHAR APENAS UM RESULTADO DE DENTRO DA LISTA,
// TENTAR ADIVINHAR O GRUPO DE RESULTADOS DE UMA LISTA DE GRUPOS

function randomizador(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}

function misturaArray(array) {
  let currentIndex = array.length,
    randomIndex
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    ;[array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ]
  }

  return (display.textContent = array)
}

function geraResposta() {
  let resposta = listaCores[randomizador(0, listaCores.length)]
  return resposta
}

function verificaResposta(resposta) {
  if (tentativaUsuario.value == resposta) {
    return 'vitoria'
  }
  return 'derrota'
}

function calculaPontuacao(resultado) {
  if (resultado == 'vitoria') {
    pontos += 100
  } else {
    pontos -= 50
  }
  return (exibePontuacao.textContent = pontos)
}

misturaArray(listaCores)

randomgenerator.addEventListener('click', function () {})

tentativaBotao.addEventListener('click', function () {
  calculaPontuacao(verificaResposta(geraResposta()))
})
