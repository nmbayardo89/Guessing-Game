let myGuess = document.body.querySelector("#guess")

const randomNumber = Math.floor(Math.random() * 100)
console.log("Winning Number", randomNumber)

myGuess.addEventListener("click", function checkGuess(){
    let myGuess = guess.value;
    if(myGuess === randomNumber){
        feedBack.textContent = "You got it right!"
    }else{
        if(myGuess> randomNumber){
            feedBack.textContent = "Your guess was " + myGuess + ". That's too low. Try Again!"
        }
    }
    console.log(checkGuess, 11);
});








// // Set random number
// let winningNumber = Math.floor(Math.random() * 100) + 1;
// // Set the initial number of guesses
// let guesses = 5;
// // Keep guessing until the correct number is found or the number of guesses is 0
// while (guesses > 0) {
//   let guess = prompt(“Enter your guess:“);
//   if (guess == winningNumber) {
//     document.body.innerHTML = "You won!"
//     break;
//   }
//   guesses--;
//   if (guesses == 0) {
//     alert(“You lost!“);
//   }
// }



