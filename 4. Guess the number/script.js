const form= document.querySelector("form")

let attempt=10;
const remainingGuesses = document.querySelector(".attempt-remain")
remainingGuesses.innerHTML=`${attempt}`
let previousAttempt=[];
const numGuess = Math.floor(Math.random()*100)+1;
console.log(numGuess);

form.addEventListener("submit",function(e){
    e.preventDefault();

    const userGuess = parseInt(document.querySelector("input").value);
    // console.log(userGuess);
    const errorDisplay=document.querySelector(".error-display")
    const prevAttempList=document.querySelector(".prev-attempt-list")


    if((userGuess<1 || isNaN(userGuess) ||  userGuess>100) &&  attempt>0){
        if(userGuess>100){
        errorDisplay.innerHTML=`Enter a guess upto 100`
        }
       else{
         // console.log(`Enter a valid guess, You have entered ${userGuess<1?userGuess:userGuess}`);
        errorDisplay.innerHTML=`Enter a valid guess, You have entered ${userGuess<1?"less than 1":userGuess}`
       }
    }
    else {
        if(userGuess===numGuess && attempt>0){
            errorDisplay.style.color="#00ff00"
            errorDisplay.innerHTML=`You have gussed correct number: ${numGuess}`
            attempt=attempt-1;
            remainingGuesses.innerHTML=`${attempt}`
        }
        else if(attempt>0){
            // handling previous attemps
            errorDisplay.innerHTML=`Wrong Attemp! Better luck next attempt`
            setTimeout(() => {
                errorDisplay.innerHTML=``;
            }, 2000);

            previousAttempt.unshift(userGuess);

           let prevAttempts="";
           prevAttempts= previousAttempt.map((val)=>{
               return `<span>${val}</span>`
            })

            // console.log(prevAttempts);
            prevAttempList.innerHTML=prevAttempts;

            // handling remaining attemps
            attempt=attempt-1;
            remainingGuesses.innerHTML=`${attempt}`
        }
        else{
            errorDisplay.style.color="yellow"
            errorDisplay.textContent="You Have reached your max attempt!"
            setTimeout(()=>{
                errorDisplay.textContent=""
            },2000)
        }
    }
})