var colors = randomColorsArray(6)
var newColors = document.getElementById('new-color')
var squares = document.querySelectorAll(".squares")
var pickedColor = pickColor()
var h1 = document.querySelector('h1')
var displayColor = document.getElementById('displayColor')
var easyButton = document.getElementById('easy')
var hardButton = document.getElementById('hard')
var messageDisplay = document.querySelector('#messageDisplay')

displayColor.innerHTML = pickedColor

newColors.addEventListener('click', function () {
    colors = randomColorsArray(6)
    pickedColor = pickColor()
    displayColor.textContent = pickedColor
    squareColor()
    h1.style.backgroundColor = "steelblue"
    messageDisplay.textContent = ""
})

easyButton.addEventListener('click', function () {
    easyButton.classList.add('selected')
    hardButton.classList.remove('selected')
    colors = randomColorsArray(3)
    pickedColor = pickColor()
    displayColor.textContent = pickedColor
    squareColor()
    h1.style.backgroundColor = "steelblue"
    messageDisplay.textContent = ""
    for (let i = 3; i < squares.length; i++) {
        squares[i].style.display = "none";
    }
    newColors.addEventListener('click', function () {
        colors = randomColorsArray(3)
        pickedColor = pickColor()
        displayColor.textContent = pickedColor
        squareColor()
        h1.style.backgroundColor = "steelblue"
        messageDisplay.textContent = ""
    })
})

hardButton.addEventListener('click', function () {
    easyButton.classList.remove('selected')
    hardButton.classList.add('selected')
    colors = randomColorsArray(6)
    pickedColor = pickColor()
    displayColor.textContent = pickedColor
    squareColor()
    h1.style.backgroundColor = "steelblue"
    messageDisplay.textContent = ""
    for (let i = 3; i < squares.length; i++) {
        squares[i].style.display = "block";
    }
})

function squareColor() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i]
        squares[i].addEventListener('click', function () {
            if (this.style.backgroundColor === pickedColor) {
                correctClicked(pickedColor)
                messageDisplay.textContent = "Correct answer"
                h1.style.backgroundColor = pickedColor
                newColors.textContent = "Play Again!"
            } else {
                this.style.backgroundColor = "#232323"
                messageDisplay.textContent = "Try Again"
            }
        })
    }
}
squareColor()

function correctClicked(color) {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color
    }
}

function pickColor() {
    var random = Math.floor((Math.random() * colors.length))
    return colors[random]
}

function randomColorsArray(num) {
    let arr = []
    for (let i = 0; i < num; i++) {
        arr.push(randomColors())
    }
    return arr
}

function randomColors() {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)

    color = `rgb(${r}, ${g}, ${b})`

    return color
}