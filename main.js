'use strict';
/* DOM elements */
let gameContainer = document.getElementsByClassName("active-game-container")[0];
let iconsContainer = document.getElementsByClassName("icons-container")[0];
let rulesContainer = document.getElementsByClassName("rules")[0];
let scoreContainer = document.getElementsByClassName("score-container")[0];
let scoreDisplay = document.getElementsByClassName("score-display")[0];
let resultDisplay = document.getElementsByClassName("result-display")[0];
let replayButton = document.getElementsByClassName("replay-button")[0];

/* Possible moves. Changing the moves names here will affect the whole game.
###Logical rules are as follows : ### 
moves[0] beats moves[2]
moves[1] beats moves[0]
moves[2] beats moves[1] */ 
const moves = ["ROCK","PAPER","SCISSORS"];

/* Initial score */
let computerScore = 0;
let playerScore = 0;

/* This function starts the game by reinitializing the scores to 0 and the display of all the elements */
let startGame = () => {
    playerScore = 0;
    computerScore = 0;
    gameContainer.style.display = "block";
    iconsContainer.style.display = "flex"
    rulesContainer.style.display = "none";
    scoreDisplay.textContent = "";
    resultDisplay.textContent = "";
    resultDisplay.style.display = "none";
    replayButton.style.display = "none";
};

/* Displays the current score */
let getScore = () => {
    return `### SCORE ### You : ${playerScore} | Computer : ${computerScore}`;
};

/* Checks if any player has reached 5 points. If true, hides the icons so it is impossible to keep playing */
let checkResult = () => {
    if(playerScore == 5 || computerScore == 5){
        iconsContainer.style.display = "none";
        replayButton.style.display = "block";
        resultDisplay.style.display = "block";
        if(playerScore == 5){
            resultDisplay.textContent = `Congratulations ! You win \\o/`;
        }
        else if(computerScore == 5){
            resultDisplay.textContent = `Too bad ! You lose...`;
        }
    }
}

/* Determines the computer's move */
let computerPlay = () => { 
    return moves[Math.floor(Math.random() * moves.length)]; 
};

/* Launches a single round. Takes 2 parameters (the moves of the 2 players), then compares them. Announces the winner of the round and shows the score. */
let playRound = (computerMove, playerMove) => {
    if(computerMove == playerMove){
        scoreDisplay.textContent = `It's a tie ! You both chose ${playerMove} ${getScore()}`;
    }
    else{
        switch(true){
            case (playerMove == moves[0] && computerMove == moves[2]) :
            case (playerMove == moves[1] && computerMove == moves[0]) :
            case (playerMove == moves[2] && computerMove == moves[1]) :
                playerScore++; // Player scores 1 point.
                scoreDisplay.textContent = `You win this round ! ${playerMove} beats ${computerMove} ! ${getScore()}` ;
                checkResult();
            break;
            default :
                computerScore++; // Computer scores 1 point.
                scoreDisplay.textContent = `You lose this round ! ${computerMove} beats ${playerMove} ! ${getScore()}`;
                checkResult();
            break;
        }
    }
};