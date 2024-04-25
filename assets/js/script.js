// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
  
    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "reset") {
                document.getElementsByClassName("game-area")[0].innerHTML = "";
                document.getElementById("incorrect").innerText = "0";
                document.getElementById("score").innerText = "0";
                keyIndex = 0;
                alert(`Please select a difficulty level`);
            } else {
                let gameType = this.getAttribute("data-type");
                keyIndex = 0;
                runGame(gameType);
  
            }
        });
    }

    runGame("easy");
});


// global variable to hold the position of each character and increment its value.
var keyIndex = 0;
var gameIndex = "a";

addEventListener("keydown", function(event) {
    let keyElements = document.getElementsByClassName("characters");

    if (keyIndex < keyElements.length){
        if (event.key === keyValue(keyIndex)) {
            incrementScore();
            keyIndex++;      
        } else {
            incrementWrongScore();
            keyIndex++;
        }
    } else if (keyIndex === keyElements.length){
        document.getElementsByClassName("game-area")[0].innerHTML = "";
        runGame(gameIndex);
        keyIndex = 0;
    }
    
    
});

  
  /**
  * Starts the game by clearing the div element with class "game-area"
  * When gameType is selected the corresponding characters from game difficulty are populated into the div
  */
  
function runGame(gameType) {

    document.getElementsByClassName("game-area")[0].innerHTML = "";
  
    gameDifficulty(gameType);
  
    if (gameType === "easy") {
        populateContent(gameType);
        gameIndex = "easy";
    } else if (gameType === "medium") {
        populateContent(gameType);
        gameIndex = "medium";
    } else if (gameType === "hard") {
        populateContent(gameType);
        gameIndex = "hard";
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }
  }
  
  /**
  * Create a random string of letters from the easy characters provided
  * Separates the string ever 5th character and joins with a space
  * Splits the result string in separate array items with its own index
  */
  
function gameDifficulty(gameType) {
    let gameResult = [];
    let easyCharacters = 'asdfghjkl';
    let mediumCharacters = 'asdfghjklqwertyuiop'
    let hardCharacters = 'asdfghjklqwertyuiopzxcvbnm'
    let resultLength = 40;
  
    if (gameType === "easy") {
        for (let i = 0; i < resultLength; i++) {
            gameResult += easyCharacters.charAt(Math.floor(Math.random() * easyCharacters.length));
        }
    } else if (gameType === "medium") {
        for (let i = 0; i < resultLength; i++) {
            gameResult += mediumCharacters.charAt(Math.floor(Math.random() * mediumCharacters.length));
        }
    } else if ((gameType === "hard")) {
        for (let i = 0; i < resultLength; i++) {
            gameResult += hardCharacters.charAt(Math.floor(Math.random() * hardCharacters.length));
        }
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }
    
    gameResult = gameResult.match(/.{1,5}/g).join(" ").split(''); // Creates a string every 5 characters and joins them with a space, then splits each character,
    return gameResult;
}
  
  /**
  * creates span elements with form characters within chosen difficulty
  *  
  */
function populateContent(gameType) {
  
    let gameContent = document.getElementsByClassName("game-area")[0];
    let gameResult = gameDifficulty(gameType);
  
    for (let j = 0; j < gameResult.length; j++) {
        let gameItem = document.createElement('span');
        gameItem.innerHTML = gameResult[j];
        gameContent.appendChild(gameItem);
        gameItem.classList.add("characters")
    }
}
  

function keyValue(keyIndex){
    // get the key value from each span in game area and define it as k
    let keyElements = document.getElementsByClassName("characters");
    return keyElements[keyIndex].innerHTML;
}

function incrementScore() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
    let keyElements = document.getElementsByClassName("characters");
    keyElements[keyIndex].style.backgroundColor = "#ccffd9"

}

function incrementWrongScore() {
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;
    let keyElements = document.getElementsByClassName("characters");
    keyElements[keyIndex].style.backgroundColor = "#ffcccc"

}
