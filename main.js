// main.js => Managing DOM elements & event listeners

// GLOBAL VARIABLES

//canvas setup
let canvas = document.querySelector('#my-canvas');
let ctx = canvas.getContext("2d");

//DOM elements
let splashScreen = document.querySelector('#splash-screen');
let gameoverScreen = document.querySelector('#gameover-screen');
let startButton = document.querySelector('#start-btn');
let restartButton = document.querySelector('#restart-btn');

//main game global variable
let gameObj;


// ADD EVENT LISTENERS
startButton.addEventListener('click', () => {
    //Showing canvas once game started
    canvas.style.display = "block";

    //hidding splash screen when game starts
    splashScreen.style.display = "none";

    // here we need to create the game
    gameObj = new Game(); // => game will have all methods and properties of game class
    //here we need to start the game
    gameObj.gameLoop();
})

canvas.addEventListener("click", () => {
    gameObj.bird.birdJump()
})

restartButton.addEventListener('click', () => {
    canvas.style.display = "block";
    gameoverScreen.style.display = "none";
    gameObj = new Game();
    gameObj.gameLoop();
})