let randomNumber = parseInt(Math.random() * 100) + 1;
console.log(randomNumber);
// console.log(randomNumber);
const input = document.getElementById("userInput");
let chance = 100;
let chanceVal = document.getElementById("chances");
let hint = document.getElementById("guessHint");
let correctNumber = document.getElementById("fetchNumber");
let highScore = document.getElementById("hscore");
score = 0;

function checkNumber() {
    if (randomNumber < input.value) {
        hint.innerText = "Your Guess is Large";
        chanceVal.InnerText = chance--;
        chanceVal.innerHTML = chance;
    } else if (randomNumber > input.value) {
        hint.innerHTML = "Your Guess is Small";
        chanceVal.InnerText = chance--;
        chanceVal.innerHTML = chance;
    } else if (randomNumber == input.value) {
        hint.innerHTML = "😍😍Hurray Guess is Correct😍😍";
        document.getElementById("body").style.background = "green";
        document.getElementById("userInput").style.background = "green";
        correctNumber.innerHTML = randomNumber;
        chanceVal.InnerText = chance--;
        chanceVal.innerHTML = chance;
        if (chance > score) {

            highScore.innerHTML = chance;
        }
    }
}

function reset() {
    location.reload();
}