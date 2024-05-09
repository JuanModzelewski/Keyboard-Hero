// global variable to hold the position of each character and increment its value.
let staticWalkthroughOne = document.getElementById("static-walkthrough-modal");
let staticWalkthroughTwo = document.getElementById("static-walkthrough-modal-two");
let closeModalWalkthroughOne = document.getElementsByClassName("close-walkthrough-modal")[0];
let closeModalWalkthroughTwo = document.getElementsByClassName("close-walkthrough-modal-two")[0];

let nextModalButton = document.getElementById("next-step-modal");

let scoreModal = document.getElementById("score-modal");
let closeScoreModal = document.getElementsByClassName("close")[0];

let displayKeyboard = document.getElementById("keyboard-display");
let keyboardShow = "none";

let keyIndex = 0;
let gameIndex = "";

let timer = "";
let min = 0;
let sec = 0;

/**
* Wait for the DOM to finish loading before running the game
* Get the button elements and add event listeners to them
* When gameType is selected the corresponding characters from game difficulty are pushed to the index.html DOM.
*/
document.addEventListener("DOMContentLoaded", function() {

    initEventListeners();

    // Opens static walkthrough as soon as user enters page.
    staticWalkthroughOne.style.display = "block";

    // RunGame and check keystrokes
    document.addEventListener("keypress", runGame);

    // Starts game time if timer is set to true
    document.addEventListener("keydown", startTimer);

    displayGame("easy");
    currentGame();

    // Prevents space-bar from scrolling when keyboard image is displayed.
    window.addEventListener('keydown', function() {if (event.keyCode == 32) {document.body.style.overflow = "hidden";}});
    window.addEventListener('keyup', function() {if (event.keyCode == 32) {document.body.style.overflow = "auto";}});
});

function initEventListeners() {
    
    window.addEventListener("click", onWindowClick);

    nextModalButton.addEventListener("click", onNextBtnClick);

    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", selectGame);
    }

    // Display keyboard image with color coded keys and finger placement
    displayKeyboard.addEventListener("click", displayKeyboardButton);
}

/**
* Runs the game on keypress and checks each keystroke to corresponding characters in game area.
* Increments scores as event occurs, displaying correct and incorrect scores.
* When keyIndex is equal to array length, timer is stopped and modal is displayed.
*/
function runGame(event){
    
    let keyElements = document.getElementsByClassName("characters");

    if (keyIndex === (keyElements.length - 1)){
        timer = false;
        scoreModal.style.display = "block";
        displayAchievement();
        displayModalScores()
        charactersPerMin();
        hideModalButton();
        onWindowClick();
    }

    if (keyIndex < keyElements.length){
        
        if (event.key === keyValue(keyIndex)) {
            incrementScore();
            keyIndex++;
        } else {
            incrementWrongScore();
            keyIndex++;
        }

        keyElements[keyIndex].style.borderColor = "#0000ff";
    }
}

// Directs game data depending on which game mode was selected.
function selectGame(){

    keyIndex = 0;

    if (this.getAttribute("data-type") === "restart") {
        clearScore();
        resetGame();
        displayGame(gameIndex);
        scoreModal.style.display = "none";
        staticWalkthroughTwo.style.display = "none";
        this.blur(); // removes focus from button so that when space is pressed button is not activated
    } else {
        let gameType = this.getAttribute("data-type");
        displayGame(gameType);
        resetGame();
        clearScore();
        scoreModal.style.display = "none";
        staticWalkthroughTwo.style.display = "none";
        gameIndex = gameType;
        currentGame();
        this.blur(); // removes focus from button so that when space is pressed button is not activated
    }

}

// Checks which game has been selected and populates the game area with characters from selected difficulty.
function displayGame(gameType){

    keyIndex = 0;

    document.getElementsByClassName("game-area")[0].innerHTML = "";
  
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
* Creates a random string of characters from a provided string per difficulty.
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
* Adds span elements to index.html DOM parent.
*/
function populateContent(gameType){ 

    let gameContent = document.getElementsByClassName("game-area")[0];
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
function updateScore(scoreNodeId, isCorrect){
    let oldScore = parseInt(document.getElementById(scoreNodeId).innerText);

    document.getElementById(scoreNodeId).innerText = ++oldScore;
    // document.getElementById("modal-correct").innerText = ++oldScore - 1;

    let keyElements = document.getElementsByClassName("characters");

    let bgColor =  "#ffcccc", borderColor =  "#ff1a1a";
    if (isCorrect) {
        bgColor = "#ccffd9";
        borderColor = "#2eb82e";
    }

    keyElements[keyIndex].style.backgroundColor = bgColor;
    keyElements[keyIndex].style.borderColor = borderColor;
    
}

function clearScore(){
    document.getElementById("incorrect").innerText = "0";
    document.getElementById("correct").innerText = "0";
    document.getElementById("modal-incorrect").innerText = "0";
    document.getElementById("modal-correct").innerText = "0";
}

function displayAchievement(){
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

function displayModalScores(){
    let correctAnswers = document.getElementById("correct").innerText;
    let incorrectAnswers = document.getElementById("incorrect").innerText; 

    document.getElementById("modal-correct").innerText = correctAnswers;
    document.getElementById("modal-incorrect").innerText = incorrectAnswers;
}

function charactersPerMin(){
    let characters = document.getElementById("correct").innerText;
    let totalTimeInSeconds =  sec + (60 * min);
    let cpm = (characters / totalTimeInSeconds) * 60
 
    document.getElementById("modal-cpm").innerText = cpm.toFixed(1);
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
    document.getElementById("modal-cpm").innerText = "00";
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

function startTimer(){
    if (keyIndex === 0){
        timer = true;
        gameTimer();
    }
}

closeScoreModal.onclick = function(){
    scoreModal.style.display = "none";
    displayGame("easy");
};

closeModalWalkthroughOne.onclick = function(){
    staticWalkthroughOne.style.display = "none";
    displayGame("easy");
};

closeModalWalkthroughTwo.onclick = function(){
    staticWalkthroughTwo.style.display = "none";
    displayGame("easy");
};

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

function hideModalButton(){
    
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

function onWindowClick(){
    if (event.target == scoreModal) {
        scoreModal.style.display = "none";
        clearScore();
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