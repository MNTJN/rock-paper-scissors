'use strict';

const moves = ["ROCK","PAPER","SCISSORS"];

let computerPlay = () => { 
    return moves[Math.floor(Math.random() * moves.length)]; 
};


console.log(computerPlay());