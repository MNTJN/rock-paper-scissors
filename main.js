'use strict';

const moves = ["ROCK","PAPER","SCISSORS"];
let computerScore = 0;
let playerScore = 0;
let playGame = 1;

let showScore = () => {
    return `SCORE \n You : ${playerScore} | Computer : ${computerScore}`;
};

let computerPlay = () => { 
    return moves[Math.floor(Math.random() * moves.length)]; 
};

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

let playRound = (computerMove, playerMove) => {
    if(computerMove == playerMove){
        alert(`It's a tie ! You both chose ${playerMove} \n ${showScore()}`);
    }
    else{
        switch(true){
            case (playerMove == moves[0] && computerMove == moves[2]) :
            case (playerMove == moves[1] && computerMove == moves[0]) :
            case (playerMove == moves[2] && computerMove == moves[1]) :
                playerScore++;
                alert(`You win ! ${playerMove} beats ${computerMove} ! \n ${showScore()}`);
            break;
            default :
                computerScore++;
                alert(`You lose ! ${computerMove} beats ${playerMove} ! \n ${showScore()}`);
            break;
        }
    }
};

while(playGame == 1)
{    
    playerScore = 0;
    computerScore = 0;

    while(computerScore != 5 && playerScore != 5){
        playRound(computerPlay(), playerSelection());
    }

    if(computerScore == 5){
        alert(`You lost ! `)
    }
    else{
        alert(`Congratulations ! You win !`);
    }
    
    playGame = 0;

    while(playGame != 1 && playGame != 2){
        playGame = parseInt(prompt(`Play again ? \n 1: YES | 2: NO`));
        if(playGame != 1 && playGame != 2){
            alert(`Type 1 to play again or 2 to quit`);
        }
    }
}