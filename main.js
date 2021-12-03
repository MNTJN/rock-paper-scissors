'use strict';

let computerPlay = () => {
    let options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random() * options.length)];
}