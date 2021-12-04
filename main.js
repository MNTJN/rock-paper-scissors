'use strict';

/* Possible moves. Changing the moves names here will affect the whole game.
###Logical rules are as follows : ### 
moves[0] beats moves[2]
moves[1] beats moves[0]
moves[2] beats moves[1] */ 
const moves = ["ROCK","PAPER","SCISSORS"];

let computerScore = 0;
let playerScore = 0;
let playGame = 1; // The game will only start if value is 1.

/* Displays the current score */
let showScore = () => {
    return `SCORE \n You : ${playerScore} | Computer : ${computerScore}`;
};

/* Determines the computer's move */
let computerPlay = () => { 
    return moves[Math.floor(Math.random() * moves.length)]; 
};

/* Prompts the player to choose his move */
let playerSelection = () => {
    let playerMove = '';
    while(playerMove != moves[0] && playerMove != moves[1] && playerMove != moves[2]){
        playerMove = prompt(`### CHOOSE YOUR MOVE ### \n TYPE ${moves[0]}, ${moves[1]}, OR ${moves[2]} :`).toUpperCase();
        if(playerMove != moves[0] && playerMove != moves[1] && playerMove != moves[2]){
            alert(`Only ${moves[0]}, ${moves[1]}, or ${moves[2]} accepted.`);
        }
    }
    return playerMove;
};

/* Launches a single round. Takes 2 parameters, the moves of the 2 players, then compares them. Announces the winner of the round and shows the score. */
let playRound = (computerMove, playerMove) => {
    if(computerMove == playerMove){
        alert(`It's a tie ! You both chose ${playerMove} \n ${showScore()}`);
    }
    else{
        switch(true){
            case (playerMove == moves[0] && computerMove == moves[2]) :
            case (playerMove == moves[1] && computerMove == moves[0]) :
            case (playerMove == moves[2] && computerMove == moves[1]) :
                playerScore++; // Player scores 1 point.
                alert(`You win ! ${playerMove} beats ${computerMove} ! \n ${showScore()}`);
            break;
            default :
                computerScore++; // Computer scores 1 point.
                alert(`You lose ! ${computerMove} beats ${playerMove} ! \n ${showScore()}`);
            break;
        }
    }
};

/* Start of game loop */
while(playGame == 1)
{   
    /* Reset of the score at the start of the game */
    playerScore = 0;
    computerScore = 0;

    /* Runs while nobody has reached a score of 5 */
    while(computerScore != 5 && playerScore != 5){
        playRound(computerPlay(), playerSelection());
    }

    if(computerScore == 5){
        alert(`You lost ! `)
    }
    else{
        alert(`Congratulations ! You win !`);
    }

    playGame = 0; // Set to 0 to prevent the game from restarting

    /* Prompts the player to choose to play again or quit */
    while(playGame != 1 && playGame != 2){
        playGame = parseInt(prompt(`Play again ? \n 1: YES | 2: NO`));
        if(playGame != 1 && playGame != 2){
            alert(`Type 1 to play again or 2 to quit`);
        }
    }
} // End of the game loop