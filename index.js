var player1 = document.getElementById('player1')
var player2 = document.getElementById('player2')
var reset = document.getElementById('reset')

var p1score = 0
var p2score = 0

var pl1 = document.getElementById('pl1')
var pl2 = document.getElementById('pl2')

var numInput = document.querySelector('input')

var winningScore = 5

var gameOver = false;



player1.addEventListener('click', () => {
    if(!gameOver){
        p1score++
        if(p1score === winningScore){
            pl1.classList.add('winner')
            gameOver = true
        }
    }
    pl1.innerHTML = p1score
})

player2.addEventListener('click', () => {
    if(!gameOver){
    p2score++
        if(p2score === winningScore){
            pl2.classList.add('winner')
            gameOver = true
        }
    }
    pl2.innerHTML = p2score
})

    reset.addEventListener('click', () => {
        p1score = 0
        p2score = 0
        pl1.innerText = p1score
        pl2.innerText = p2score
        pl1.classList.remove('winner')
        pl2.classList.remove('winner')
        gameOver = false;
        numInput.value = ""
    })


numInput.addEventListener('change', () =>{

    winningScore = Number(numInput.value)
    document.getElementById('plnum').textContent = winningScore

} )