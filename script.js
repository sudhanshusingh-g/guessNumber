const randomNumber=parseInt(Math.floor(Math.random()*10)+1)
const button=document.querySelector('#button')
const input=document.querySelector('#input')
const prevGuess=document.querySelector('.prevGuess')
const attempt=document.querySelector('.attempt')
const result=document.querySelector('.result')
const resultContainer=document.querySelector('.resultContainer')

const error=document.createElement('h1')



const guessList=[]
let attemptNumber=1;
let playGame=true;


if(playGame){
    button.addEventListener('click',(e)=>{
        e.preventDefault()
        const value=parseInt(input.value)
        console.log(value,randomNumber);
        validateInput(value)
        input.value=''
    })
}

// Check input is number or not
function validateInput(value){
    if( isNaN(value) || value ==='' || value < 1 || value > 10){
        result.innerHTML=`<h4>Please enter a valid number 🙏🏻</h4>`
    }
    else{
        checkGuess(value)
    }
}

// Check the guess whether it is in the range, if yes, resultDisplay will be called
function checkGuess(guess){
    guessList.push(guess)
    prevGuess.innerHTML+=`${guess},`
    attemptNumber++;
    attempt.innerHTML=`${6-attemptNumber}`
    if(attemptNumber === 5){
        endGame()
        result.innerHTML='';
    }
    if(guess == randomNumber){
        result.innerHTML=`Bull's eye .The random number was ${guess}🎯`
        endGame()
    }
    else if(guess <randomNumber){
        result.innerHTML=`You are closer!🤏`
    }
    else if(guess >randomNumber){
        result.innerHTML=`You are farther!😪`
    }
}

// start a game 
function newGame(){
    input.value=''
    playGame=true
    attemptNumber=1
    guessList=[]

} 
// end game
function endGame(){
    input.setAttribute('disabled','')
    button.setAttribute('disabled','')
    error.innerHTML=`<button onclick="newGame()">Start a new game</button>`
    resultContainer.appendChild(error)
    playGame=false
}
