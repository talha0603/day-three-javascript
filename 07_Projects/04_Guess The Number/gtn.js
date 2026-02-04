let randomNumber = parseInt(Math.random() * 100 + 1);            // ParseInt vanishes decimal values

const userInput = document.querySelector('#putNumberField')
const submitBtn = document.querySelector('#submitBtn')
const usedGuesses = document.querySelector('.guesses')
const remainGuesses = document.querySelector('.lastResult')
const LowOrHi = document.querySelector('.LowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

// take an array where we store user's previous guesses
let prevGuess = []
let numGuess = 1

let playGame = true;
if (playGame) {
    submitBtn.addEventListener('click', function (e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuesses(guess)
    })
}


// validate guesses, number is not 0, either it gives number or not
function validateGuesses (guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number')
    }
    else if (guess < 1) {
        alert('Please enter a valid number greater than 0')
    }
    else if (guess > 100) {
        alert('Please enter a valid number less than 100')
    }
    else {
        prevGuess.push()
        if (numGuess === 11) {
            displayGuesses(guess)
            displayMessage(`Game Over!  Random Number was ${randomNumber}`)
            endGame();
        } 
        else {
            displayGuesses(guess);
            checkGuesses(guess);
        }
    }
}

// check the guess
function checkGuesses (guess) {
    if (guess === randomNumber) {
        displayMessage(`You guessed it right`)
        endGame();
    }
    else if (guess < randomNumber) {
        displayMessage(`Your guessed is too low`)
    }
    else if (guess > randomNumber) {
        displayMessage(`Your guessed is too high`)
    }
}

// display guess
function displayGuesses (guess) {
    userInput.value = ''
    usedGuesses.innerHTML += `${guess} `
    numGuess++;
    remainGuesses.innerHTML = `${11 - numGuess}`
}

// display message
function displayMessage (message) {
    LowOrHi.innerHTML = `<h2>${message}</h2>`
}

// end game
function endGame (){
    userInput.value = ''                             // value is cleaned
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`
    startOver.appendChild(p)
    playGame = false;
    newGame()
}

// start new
function newGame (){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = []
        numGuess = 1
        usedGuesses.innerHTML = ''
        remainGuesses.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)

        playGame = true
    })
}
