// global variable to hold the position of each character and increment its value.
let staticWalkthroughOne = document.getElementById("static-walkthrough-modal");
let staticWalkthroughTwo = document.getElementById("static-walkthrough-modal-two");
let closeModalWalkthroughOne = document.getElementsByClassName("close-walkthrough-modal")[0];
let closeModalWalkthroughTwo = document.getElementsByClassName("close-walkthrough-modal-two")[0];

let scoreModal = document.getElementById("game-score-modal");
let closeScoreModal = document.getElementsByClassName("close")[0];

let nextModalButton = document.getElementById("next-step-modal");

let displayKeyboard = document.getElementById("keyboard-display");
let keyboardShow = "none";

let keyIndex = 0;
let gameIndex = "";

let min = 0;
let sec = 0;

/**
* Wait for the DOM to finish loading before running the game
* Get the button elements and add event listeners to them
* When gameType is selected the corresponding characters from game difficulty are pushed to the index.html DOM.
*/
document.addEventListener("DOMContentLoaded", function() {

    // Opens static walkthrough as soon as user enters page.
    staticWalkthroughOne.style.display = "block";

    nextModalButton.addEventListener("click", function(){
        staticWalkthroughOne.style.display = "none";
        staticWalkthroughTwo.style.display = "block";
    });

    window.onclick = function(event) {
        if (event.target == scoreModal) {
            scoreModal.style.display = "none"; 
        } else if (event.target == staticWalkthroughOne) {
            staticWalkthroughOne.style.display = "none";
        } else if (event.target == staticWalkthroughTwo) {
            staticWalkthroughTwo.style.display = "none";
        }
      }
    
    let buttons = document.getElementsByTagName("button");
  
    for (let button of buttons) {
        button.addEventListener("click", function() {

            keyIndex = 0;

            if (this.getAttribute("data-type") === "restart") {
                clearScore();
                resetGame();
                runGame(gameIndex);
                scoreModal.style.display = "none";
                staticWalkthroughTwo.style.display = "none";
                this.blur(); // removes focus from button so that when space is pressed button is not activated
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
                resetGame();
                clearScore();
                scoreModal.style.display = "none";
                staticWalkthroughTwo.style.display = "none";
                keyIndex = 0;
                gameIndex = gameType;
                currentGame();
                this.blur(); // removes focus from button so that when space is pressed button is not activated
            }

        });
    }


    /**
    * Correct score is incremented if keyValue is correct or wrongScore incremented if incorrect.
    * When keyIndex is equal to array length, timer is stopped and modal is displayed.
    * */
    document.addEventListener("keypress", function(event) {

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
            timer = false;
            scoreModal.style.display = "block";
            displayAchievement();
            wordsPerMin();
            hideModalButton();
            //document.getElementsByClassName("game-area")[0].innerHTML = "";
            //runGame(gameIndex);
        }

    });


    /** 
     * Starts gameTimer function when keyIndex = 1 and sets timer to true.
     * If timer = false the gameTImer will stop.
     * */ 
    document.addEventListener("keydown", function() {

        if (keyIndex === 1){
            timer = true;
            gameTimer();
        }

    });

    runGame("easy");
    currentGame();

    // Display keyboard image with color coded keys and finger placement
    displayKeyboard.onclick = function() {    
        if (keyboardShow === "none") {
            showKeyboard();
            keyboardShow = "display"
            displayKeyboard.style.color = "rgb(26, 140, 148)"
        } else {
            hideKeyboard();
            keyboardShow = "none"
            displayKeyboard.style.color = "rgb(56, 56, 56)"
        }
    }


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
    }

    return gameIndex
  }

  /**
  * Creates a random string of letters from provided difficulty characters.
  * Separates the string every 5th character and joins with a space to create space character.
  * Splits the result string in separate array of items with each character having its own index. *
  * */
  
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
    } 
    
    gameResult = gameResult.match(/.{1,5}/g).join(" ").split(''); // Creates a string every 5 characters and joins them with a space, then splits each character into an array.
    return gameResult;
}


  
  /**
  * creates span elements from characters provided within chosen difficulty.
  * Adds span elements to index.html DOM parent.
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
    document.getElementById("modal-correct").innerText = ++oldScore - 1;

    let keyElements = document.getElementsByClassName("characters");

    keyElements[keyIndex].style.backgroundColor = "#ccffd9"
    keyElements[keyIndex].style.borderColor = "#2eb82e"
}


function incrementWrongScore() {
    let oldScore = parseInt(document.getElementById("incorrect").innerText);

    document.getElementById("incorrect").innerText = ++oldScore;
    document.getElementById("modal-incorrect").innerText = ++oldScore - 1;

    let keyElements = document.getElementsByClassName("characters");

    keyElements[keyIndex].style.backgroundColor = "#ffcccc"
    keyElements[keyIndex].style.borderColor = "#ff1a1a"
}


function clearScore() {
    document.getElementById("incorrect").innerText = "0";
    document.getElementById("correct").innerText = "0";
    document.getElementById("modal-incorrect").innerText = "0";
    document.getElementById("modal-correct").innerText = "0";
}


function displayAchievement() {
    let correctAnswers = document.getElementById("correct").innerText;
    let starOne = document.getElementById("star-one");
    let starTwo = document.getElementById("star-two");
    let starThree = document.getElementById("star-three");

    if (correctAnswers > 42) {
        starOne.style.color = "yellow";
        starTwo.style.color = "yellow";
        starThree.style.color = "yellow";
    } else if (correctAnswers >= 35) {
        starOne.style.color = "yellow";
        starTwo.style.color = "yellow";
    } else if (correctAnswers >= 25) {
        starOne.style.color = "yellow";
    }

}

function wordsPerMin() {
    minutes = document.getElementById('min').innerText;
    seconds = document.getElementById('sec').innerText;
    correct = document.getElementById("correct").innerText;

    totalTime = (minutes * 60) + seconds;
    wordCount = correct / 5;
    wpm = totalTime / wordCount;
 
    document.getElementById("modal-wpm").innerText = wpm.toFixed(1);
}

function resetGame(){
    let starOne = document.getElementById("star-one");
    let starTwo = document.getElementById("star-two");
    let starThree = document.getElementById("star-three");

    timer = false;
    keyIndex = 0;
    min = 0;
    sec = 0;
    document.getElementById('min').innerHTML = "00"; 
    document.getElementById('sec').innerHTML = "00";
    document.getElementById("modal-wpm").innerText = "00"
    starOne.style.color = "#dfdfdf";
    starTwo.style.color = "#dfdfdf";
    starThree.style.color = "#dfdfdf";
    
}

/**
 * Changes button class based on game difficulty.
 * Ensures current selected game button is always active. 
 */
function currentGame(){
    let currentGame = document.getElementsByClassName("btn");

    if (gameIndex === "easy") {               
        currentGame[0].classList.add("active");
        currentGame[1].classList.remove("active");
        currentGame[2].classList.remove("active");
    } else if (gameIndex === "medium") {
        currentGame[1].classList.add("active");
        currentGame[0].classList.remove("active");
        currentGame[2].classList.remove("active");
    } else if (gameIndex === "hard") {
        currentGame[2].classList.add("active");
        currentGame[0].classList.remove("active");
        currentGame[1].classList.remove("active");
    }
}
 

// function to start a game timer
function gameTimer() {
    if (timer) { 
        sec++; 
  
        if (sec == 60) { 
            min++; 
            sec = 0; 
        } 
  
        let minutes = min; 
        let seconds = sec; 
  
        if (min < 10) { 
            minutes = "0" + minutes; 
        } 
  
        if (sec < 10) { 
            seconds = "0" + seconds; 
        } 
  
        document.getElementById('min').innerText = minutes; 
        document.getElementById('sec').innerText = seconds; 

        setTimeout(gameTimer, 1000); 
    } 
}

closeScoreModal.onclick = function() {
    scoreModal.style.display = "none";
}

closeModalWalkthroughOne.onclick = function() {
    staticWalkthroughOne.style.display = "none";
}

closeModalWalkthroughTwo.onclick = function() {
    staticWalkthroughTwo.style.display = "none";
}

function showKeyboard(){
    let keyboardImage = document.getElementById("keyboard-image");

    displayKeyboard.innerHTML = "Hide Keyboard <i class='fa-solid fa-angle-up'></i>";
    keyboardImage.style.display = "block";
}

function hideKeyboard(){
    let keyboardImage = document.getElementById("keyboard-image");

    displayKeyboard.innerHTML = "Display Keyboard <i class='fa-solid fa-angle-down'></i>";
    keyboardImage.style.display = "none";
}


function hideModalButton() {
    
    let modalButtons = document.getElementsByClassName("modal-btn");

    if (gameIndex === "easy") {
        modalButtons[1].style.display = "none";
        modalButtons[2].style.display = "inline-block";
        modalButtons[3].style.display = "inline-block";
        } else if (gameIndex == "medium") {
            modalButtons[1].style.display = "inline-block";
            modalButtons[2].style.display = "none";
            modalButtons[3].style.display = "inline-block";
        } else if (gameIndex == "hard") {
            modalButtons[1].style.display = "inline-block";
            modalButtons[2].style.display = "inline-block";
            modalButtons[3].style.display = "none";

        }
    
}
