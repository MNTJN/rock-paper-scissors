'use strict';

let translateNumberToMove = (numberToTranslate) => {
    if(numberToTranslate == 1){
        return "ROCK";
    }else if(numberToTranslate == 2){
        return "PAPER";
    }else if(numberToTranslate == 3){
        return "SCISSORS";
    }
    else{
        return 0;
    }
};

let computerPlay = () => {
    let options = [1, 2, 3];
    return translateNumberToMove(options[Math.floor(Math.random() * options.length)]);
};

let playerSelection = () => {
    let selection = 0;
    while(selection < 1 || selection > 3){
        selection = prompt("### CHOOSE YOUR MOVE ### \n ROCK : 1 \n PAPER : 2 \n SCISSORS : 3");
        if(selection < 1 || selection > 3){
            alert("ROCK : 1 \n PAPER : 2 \n SCISSORS : 3");
        }
    }
    return translateNumberToMove(selection);
};