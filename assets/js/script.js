// global variables.
let screenSize = window.matchMedia("(max-width: 1024px)");
let warningModal = document.getElementById("mobile-warning");
let closWarning = document.getElementById("close-warning-modal");

let staticWalkthroughOne = document.getElementById("static-walkthrough-modal");
let staticWalkthroughTwo = document.getElementById("static-walkthrough-modal-two");
let closeModalWalkthroughOne = document.getElementById("close-walkthrough-modal");
let closeModalWalkthroughTwo = document.getElementById("close-walkthrough-modal-two");

let nextModalButton = document.getElementById("next-step-modal");

let achievementModal = document.getElementById("achievement-modal");
let closeAchievementModal = document.getElementById("close-achievement-modal");

let displayKeyboard = document.getElementById("keyboard-display");
let keyboardShow = "none";

let keyIndex = 0;
let gameIndex = "";

let timer = "";
let min = 0;
let sec = 0;

/**
* Wait for the DOM to finish loading before running the game
*/
document.addEventListener("DOMContentLoaded", function() {

    initEventListeners();

    // Opens static walkthrough as soon as user enters page.
    staticWalkthroughOne.style.display = "block";

    // RunGame and check keystrokes
    document.addEventListener("keypress", runGame);

    // Checks the length of the game and opens modal when last key has been pressed
    document.addEventListener("keypress", checkGameLength);

    // Starts game timer, timer is set to true.
    document.addEventListener("keydown", startTimer);

    // Default game mode.
    displayGame("easy");
    
    // Sets button to active for whichever game is being displayed.
    currentGame();

    // Displays a warming modal informing users that an external keyboard is require to play and learn.
    mobileWarning(screenSize);

    // Prevents space-bar from scrolling when keyboard image is displayed.
    window.addEventListener('keydown', function() {if (event.keyCode == 32) {document.body.style.overflow = "hidden";}});
    window.addEventListener('keyup', function() {if (event.keyCode == 32) {document.body.style.overflow = "auto";}});

});

function initEventListeners() {

    // Main button event listener checking which game has been selected and using its data-type to load requested difficulty or restart game.
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", selectGame);
    }

    // Event listener to check if there is a change in screen size and display a warning if size is 1024px and below.
    screenSize.addEventListener("change", function(){
        mobileWarning(screenSize);
    });

    // Display keyboard image with color coded keys and finger placement.
    displayKeyboard.addEventListener("click", displayKeyboardButton);

    // Closes modals when the window is click outside modal content.
    window.addEventListener("click", onWindowClick);

    // Displays next modal from walkthrough one to walkthrough two.
    nextModalButton.addEventListener("click", onNextBtnClick);

    // Close modal listeners 
    closeModalWalkthroughOne.addEventListener("click", hideWalkthroughModal);
    closeModalWalkthroughTwo.addEventListener("click", hideWalkthroughModal);
    closeAchievementModal.addEventListener("click", hideAchievementModal);
}

/**
* Checks RunGame eventlistener for each keystroke and checks each event to corresponding characters in game area.
* Increments scores as event occurs, displaying correct and incorrect scores.
* When keyIndex is equal to array length, timer is stopped and achievement modal is displayed.
*/
function runGame(event){
    
    let keyElements = document.getElementsByClassName("characters");
    
    if (keyIndex < keyElements.length){
        
        if (event.key === keyValue(keyIndex)) {
            incrementScore();
            keyIndex++;
        } else {
            incrementWrongScore();
            keyIndex++;
        }

        checkGameLength();

        keyElements[keyIndex].style.borderColor = "#0000ff";
    }
}

// Check game length and opens achievements modal on last keystroke.
function checkGameLength (){
    let keyElements = document.getElementsByClassName("characters");

    if (keyIndex === (keyElements.length)){
        achievementModal.style.display = "block";
        timer = false;
        displayModalScores();
        displayScoreStars();
        charactersPerMin();
        hideModalButton();
        onWindowClick();        
    }
}

// Directs game data depending on which game mode was selected.
function selectGame(){

    keyIndex = 0;

    if (this.getAttribute("data-type") === "restart") {
        resetGame();
        displayGame(gameIndex);
        achievementModal.style.display = "none";
        staticWalkthroughTwo.style.display = "none";
        this.blur(); // removes focus from button so that when space is pressed button is not activated
    } else {
        let gameType = this.getAttribute("data-type");
        displayGame(gameType);
        resetGame();
        achievementModal.style.display = "none";
        staticWalkthroughTwo.style.display = "none";
        gameIndex = gameType;
        currentGame();
        this.blur(); // removes focus from button so that when space is pressed button is not activated
    }

}

// Checks which game type has been selected and populates the game area with characters from selected game type.
function displayGame(gameType){

    keyIndex = 0;

    document.getElementById("game-area").innerHTML = "";
  
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

    return gameIndex;
}

/**
* Creates a random string of characters from a provided string assigned for each difficulty level.
* Separates the string every 5th character and joins them with a space to create space character.
* Splits the resulted string into a separate array of items with each character having its own index.
*/
function gameDifficulty(gameType){

    let gameResult = [];
    let easyCharacters = 'asdfghjkl';
    let mediumCharacters = 'asdfghjklqwertyuiop';
    let hardCharacters = 'asdfghjklqwertyuiopzxcvbnm';
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
* Creates span elements from characters provided within chosen difficulty.
* Adds span elements to index.html DOM parent game-area.
*/
function populateContent(gameType){ 

    let gameContent = document.getElementById("game-area");
    let gameResult = gameDifficulty(gameType);
  
    for (let j = 0; j < gameResult.length; j++) {
        let gameItem = document.createElement('span');
        gameItem.innerHTML = gameResult[j];
        gameContent.appendChild(gameItem);
        gameItem.classList.add("characters");
    }
}

// Gets the key index from each span in game area and presents it value.
function keyValue(keyIndex){
    let keyElements = document.getElementsByClassName("characters");
    return keyElements[keyIndex].innerHTML;
}

// increments correct score value.
function incrementScore(){
    updateScore("correct", true);
}

// increments incorrect score value.
function incrementWrongScore(){
    updateScore("incorrect", false);
}

// updates score to index.html id for each value.
// guidance from mentor to simplify code, by introducing scoreNodeId and logic
function updateScore(scoreNodeId, isCorrect){
    let oldScore = parseInt(document.getElementById(scoreNodeId).innerText);

    document.getElementById(scoreNodeId).innerText = ++oldScore;

    let keyElements = document.getElementsByClassName("characters");

    let bgColor =  "#ffcccc", borderColor =  "#ff1a1a";
    if (isCorrect) {
        bgColor = "#ccffd9";
        borderColor = "#2eb82e";
    }

    keyElements[keyIndex].style.backgroundColor = bgColor;
    keyElements[keyIndex].style.borderColor = borderColor;
    
}

// Displays stars based on the amount of correct answers.
function displayScoreStars(){
    let correctAnswers = document.getElementById("correct").innerText;
    let starOne = document.getElementById("star-one");
    let starTwo = document.getElementById("star-two");
    let starThree = document.getElementById("star-three");

    if (correctAnswers > 42) {
        starOne.style.color = "#ffd700";
        starTwo.style.color = "#ffd700";
        starThree.style.color = "#ffd700";
    } else if (correctAnswers >= 35) {
        starOne.style.color = "#ffd700";
        starTwo.style.color = "#ffd700";
    } else if (correctAnswers >= 25) {
        starOne.style.color = "#ffd700";
    }

}

// Displays score for correct and incorrect answers in modal.
function displayModalScores(){
    let correctAnswers = document.getElementById("correct").innerText;
    let incorrectAnswers = document.getElementById("incorrect").innerText;

    document.getElementById("modal-correct").innerText = correctAnswers;
    document.getElementById("modal-incorrect").innerText = incorrectAnswers;
}

// Calculates characters per minute and adds value to id in achievement modal.
function charactersPerMin(){
    let characters = document.getElementById("correct").innerText;
    let totalTimeInSeconds =  sec + (60 * min);
    let cpm = (characters / totalTimeInSeconds) * 60;
 
    document.getElementById("modal-cpm").innerText = cpm.toFixed(1);
}

// Resets KeyIndex, scores, score stars, timer and timer indexes.
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
    document.getElementById("modal-cpm").innerText = "00";
    starOne.style.color = "#dfdfdf";
    starTwo.style.color = "#dfdfdf";
    starThree.style.color = "#dfdfdf";

    document.getElementById("incorrect").innerText = "0";
    document.getElementById("correct").innerText = "0";
    document.getElementById("modal-incorrect").innerText = "0";
    document.getElementById("modal-correct").innerText = "0";
    
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

// Function to hold timer values.
// Code snippets taken from https://www.geeksforgeeks.org/how-to-create-stopwatch-using-html-css-and-javascript/
function gameTimer(){
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

// Starts timer
function startTimer(){
    if (keyIndex === 0){
        timer = true;
        gameTimer();
    }
}

function hideAchievementModal(){
    achievementModal.style.display = "none";
    displayGame(gameIndex);
    resetGame();
}

function hideWalkthroughModal(){
    staticWalkthroughOne.style.display = "none";
    staticWalkthroughTwo.style.display = "none";
    displayGame("easy");
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

// Display keyboard image with color coded keys and finger placement
function displayKeyboardButton(){
    if (keyboardShow === "none") {
        showKeyboard();
        keyboardShow = "display";
        displayKeyboard.style.color = "rgb(26, 140, 148)";
    } else {
        hideKeyboard();
        keyboardShow = "none";
        displayKeyboard.style.color = "rgb(56, 56, 56)";
    }

    displayKeyboard.blur();
}

// Assisted by mentor to build a switch case
function hideModalButton(){
    
    let modalButtons = document.getElementsByClassName("modal-btn");
    let modalBtn1Style, modalBtn2Style, modalBtn3Style;

    switch (gameIndex) {
        case "easy": {
            modalBtn1Style = "none";
            modalBtn2Style = "inline-block";
            modalBtn3Style = "inline-block";
            break;
        }
        case "medium": {
            modalBtn1Style = "inline-block";
            modalBtn2Style = "none";
            modalBtn3Style = "inline-block";
            break;
        }
        case "hard": {
            modalBtn1Style = "inline-block";
            modalBtn2Style = "inline-block";
            modalBtn3Style = "none";
            break;
        }
    }
  
    modalButtons[1].style.display = modalBtn1Style;
    modalButtons[2].style.display = modalBtn2Style;
    modalButtons[3].style.display = modalBtn3Style;
    
}

function onWindowClick(){
    if (event.target == achievementModal) {
        achievementModal.style.display = "none";
        resetGame();
        displayGame(gameIndex);
    } else if (event.target == staticWalkthroughOne) {
        staticWalkthroughOne.style.display = "none";
        displayGame("easy");
    } else if (event.target == staticWalkthroughTwo) {
        staticWalkthroughTwo.style.display = "none";
        displayGame("easy");
    } 
}

function onNextBtnClick(){
    staticWalkthroughOne.style.display = "none";
    staticWalkthroughTwo.style.display = "block";
}

// Tutorial taken from W3S
function mobileWarning(screenSize){
    if (screenSize.matches) {
        warningModal.style.display = "block";
      }  else {
        warningModal.style.display = "none";
      }
}

closWarning.onclick = function(){
    warningModal.style.display = "none";
};