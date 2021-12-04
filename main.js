'use strict';

const moves = ["ROCK","PAPER","SCISSORS"];

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