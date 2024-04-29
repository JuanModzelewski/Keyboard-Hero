// global variable to hold the position of each character and increment its value.
let keyIndex = 0;
let gameIndex = "";

let min = 0;
let sec = 0;


/**
* Wait for the DOM to finish loading before running the game
* Get the button elements and add event listeners to them
* Identify active button and update class when clicked.
*/
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
  
    for (let button of buttons) {
        button.addEventListener("click", function() {

            keyIndex = 0;

            let currentGame = document.getElementsByClassName("active");
            currentGame[0].className = currentGame[0].className.replace(" active", "");
            this.className += " active";
            this.blur(); // removes focus from button so that when space is pressed button is not activated


            if (this.getAttribute("data-type") === "reset") {
                alert(`Please select a difficulty level`);
                clearScore()
                document.getElementsByClassName("game-area")[0].innerHTML = "";
                keyIndex = 0;
                min = 0;
                sec = 0;
                this.blur(); // removes focus from button so that when space is pressed button is not activated
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
                clearScore()
                keyIndex = 0;
                this.blur(); // removes focus from button so that when space is pressed button is not activated
                }              
        });
    }

    /**
    * Starts the game by clearing the div element with class "game-area"
    * When gameType is selected the corresponding characters from game difficulty are populated into the div
    */
    document.addEventListener("keydown", function(event) {

        let keyElements = document.getElementsByClassName("characters");
    
        if (keyIndex < keyElements.length){
            
            if (event.key === keyValue(keyIndex)) {
                incrementScore();
                keyIndex++;
            } else {
                incrementWrongScore();
                keyIndex++;
            }
    
            keyElements[keyIndex].style.borderColor = "#0000ff";
    
        } else if (keyIndex === keyElements.length){
            document.getElementsByClassName("game-area")[0].innerHTML = "";
            runGame(gameIndex);
            timer = false;
        }

    });

    /** 
     * Starts gameTimer function when key Index = 1 and sets timer to true
     * If timer = false the gameTImer will stop
     * */ 
    document.addEventListener("keydown", function() {

        if (keyIndex === 1){
            timer = true;
            gameTimer();
        }
            
    });

    runGame("easy");

});


function runGame(gameType) {

    keyIndex = 0;

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
    
    gameResult = gameResult.match(/.{1,5}/g).join(" ").split(''); // Creates a string every 5 characters and joins them with a space, then splits each character into an array.
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
    // get the key index from each span in game area and presents it value
    let keyElements = document.getElementsByClassName("characters");
    return keyElements[keyIndex].innerHTML;
}

function incrementScore() {
    let oldScore = parseInt(document.getElementById("correct").innerText);
    document.getElementById("correct").innerText = ++oldScore;
    let keyElements = document.getElementsByClassName("characters");
    keyElements[keyIndex].style.backgroundColor = "#ccffd9"
    keyElements[keyIndex].style.borderColor = "#2eb82e"

}

function incrementWrongScore() {
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;
    let keyElements = document.getElementsByClassName("characters");
    keyElements[keyIndex].style.backgroundColor = "#ffcccc"
    keyElements[keyIndex].style.borderColor = "#ff1a1a"

}

function clearScore() {
    document.getElementById("incorrect").innerText = "0";
    document.getElementById("correct").innerText = "0";
}
 

/* function to start stopwatch */
function gameTimer() {
    if (timer) { 
        sec++; 
  
        if (sec == 60) { 
            min++; 
            sec = 0; 
        } 
  
        let minString = min; 
        let secString = sec; 
  
        if (min < 10) { 
            minString = "0" + minString; 
        } 
  
        if (sec < 10) { 
            secString = "0" + secString; 
        } 
  
        document.getElementById('min').innerHTML = minString; 
        document.getElementById('sec').innerHTML = secString; 

        setTimeout(gameTimer, 1000); 
    } 
}


