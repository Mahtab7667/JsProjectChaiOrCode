let randomNumber=Math.floor(Math.random()*100)+1;

const submit = document.querySelector("#subt")
userInput =document.querySelector("#guessField")
const guessSlot=document.querySelector(".prev-attempt-list")
const remaining=document.querySelector(".attempt-remain")
const lowOrHi= document.querySelector(".lowOrHi")
const startOver= document.querySelector(".resultParas")

const p = document.createElement("p")

// let prevGuess=[]
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener("click",((e)=>{
    console.log("hi");
    e.preventDefault()
    const guess = userInput.value;
    validateGuess(guess);
    }))
}


function validateGuess(guess){
    if(isNaN(guess)){
        alert("please enter a valid number")
    } else if(guess<1){
        alert("please enter a number more than 1")
    } else if(guess>100){
        alert("please enter a number more than 1")
    } else {
        // prevGuess.push(guess); // i dont know why it is used here
        if(numGuess===11){
            // prevRemainGuessData(guess)
            displayMessage(`Game Over Random number ${randomNumber}`)
            end();
        } else{
            prevRemainGuessData(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess===randomNumber){
        displayMessage(`Correct Guess`)
        end()
    } else if(guess<randomNumber){
        displayMessage(`guess is low`)
    } else if(guess>randomNumber){
        displayMessage(`guess is high`)
    }
}

function prevRemainGuessData(guess){
    userInput.value=""
    guessSlot.innerHTML +=`${guess},`
    numGuess++
    remaining.innerHTML=`${11-numGuess}`
}
function displayMessage(message){
    lowOrHi.innerHTML=`${message}`
    lowOrHi.style.color="yellow"
}

function end(){
    userInput.value=""
    userInput.setAttribute("disabled", "")
    submit.setAttribute("disabled","")

    p.classList.add("button")
    p.innerHTML=`<h2 id="newGame">Start New Game</h2>`
    startOver.appendChild(p);
    p.style.border="2px solid green"
    p.style.color="black"
    p.style.cursor="pointer"

    playGame=false;

    newGame();
}

function newGame(){
    const button=document.querySelector(".button")
    button.addEventListener('click',function(e){
    randomNumber=Math.floor(Math.random()*100)+1;
    // prevGuess=[];
    numGuess=1;
    guessSlot.innerHTML=""
    remaining.innerHTML=`${11-numGuess}`
    lowOrHi.innerHTML=``
    userInput.removeAttribute('disabled')
    submit.removeAttribute("disabled")
    startOver.removeChild(p)


        playGame=true;
    })
}

