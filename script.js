const randomNumber=parseInt(Math.floor(Math.random()*10)+1)
const button=document.querySelector('#button')
const input=document.querySelector('#input')
const prevGuess=document.querySelector('.prevGuess')
const attempt=document.querySelector('.attempt')
const result=document.querySelector('.result')
const resultContainer=document.querySelector('.resultContainer')

const error=document.createElement('p')



const guessList=[]
let attemptNumber=1;
let playGame=true;


if(playGame){
    button.addEventListener('click',(e)=>{
        e.preventDefault()
        const value=parseInt(input.value)
        console.log(value,randomNumber);
        validateInput(value)
    })
}

// Check input is number or not
function validateInput(value){
    if( isNaN(value) || value ==='' || value < 1 || value > 10){
        result.innerHTML=`<h2>Please enter a valid number 🙏🏻`
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
    attempt.innerHTML=`${4-attemptNumber}`
    if(guess == randomNumber){
        console.log(guess,randomNumber);
        result.innerHTML=`🎯`
        endGame()
    }
    else if(guess <randomNumber){
        result.innerHTML=`${guess} is closer! 🤏`
    }
    else if(guess >randomNumber){
        result.innerHTML=`${guess} is farther ! 😪🥱`
    }

}

// To display result of the guess, update the attempt, and store the previous guess values
function resultDisplay(guess){
    
}

// Display message
function displayMessage(message){

}

// start a game 
function newGame(){

} 
// end game
function endGame(){
    
}
