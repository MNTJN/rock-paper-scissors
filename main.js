'use strict';
/* DOM Elements */
const startButton = document.querySelector('.start-button');
const restartButton = document.querySelector('.replay-button');
const rulesContainer = document.querySelector('.rules-container');
const scoreContainer = document.querySelector('.score-container');
const resultsContainer = document.querySelector('.results-container');
const iconsContainer = document.querySelector('.icons-container');
const history = document.querySelector('.game-history-container');
const roundCounter = document.querySelector('.round-counter');
const icons = document.querySelectorAll('.icon i');

/* Possible moves. 
### Change names here to apply to the whole game ### */
const moves = ['ROCK','PAPER','SCISSORS'];

/* Moves icons */
const fontAwesomeIcons = ['fas fa-hand-rock','fas fa-hand-paper','fas fa-hand-scissors'];

let playerScore = 0;
let computerScore = 0;
let roundCount = 0;
let playerSelection = '';
let computerSelection = '';

const loadPage = () => {
    const pageTitle = document.querySelector('.game-title');
    pageTitle.textContent = `${moves[0]}, ${moves[1]}, ${moves[2]}`;
    const rules = document.querySelector('.rules');
    rules.textContent = `${moves[0]} beats ${moves[2]} | ${moves[1]} beats ${moves[0]} | ${moves[2]} beats ${moves[1]}`;
};
loadPage();

const insertIcons = () => {
    let i = 0;
    iconsContainer.style.visibility = 'initial';
    icons.forEach(icon => {
        icon.setAttribute('class', fontAwesomeIcons[i]);
        icon.setAttribute('move', moves[i]);
        i++;
    });
};

let computerPlay = () => { 
    computerSelection = moves[Math.floor(Math.random() * moves.length)];
}

const setIconsEventListeners = () => {
    icons.forEach(icon => {
        icon.addEventListener('click', function(){
            this.classList.add('clicked');
            for(let i = 0 ; i < this.attributes.length ; i++){
                if(this.attributes[i].name === 'move'){
                    playerSelection = this.attributes[i].value;
                }
            }
            playRound();
        });
        icon.addEventListener('transitionend', function(){
            this.classList.remove('clicked');
        });
    });    
}

/* Determines the winner of each round, updates the score and the history. */
const compareMoves = () => {
    let playerIconToDisplay = '';
    let computerIconToDisplay = '';
    for(let i = 0 ; i < fontAwesomeIcons.length ; i++){
        if(playerSelection == moves[i]){
            playerIconToDisplay = fontAwesomeIcons[i];
        }
        if(computerSelection == moves[i]){
            computerIconToDisplay = fontAwesomeIcons[i];
        }
    }
    const newEntry = document.createElement('div');
    newEntry.setAttribute('class', 'game-history-element');
    const historyRound = document.createElement('p');
    historyRound.setAttribute('class', 'game-history-round-display');
    const playerDisplayedIcon = document.createElement('i');
    const computerDisplayedIcon = document.createElement('i');
    const iconsDiv = document.createElement('div');
    iconsDiv.setAttribute('class','game-history-icons-display');
    const playerIconParagraph = document.createElement('p');
    playerIconParagraph.textContent = 'YOU';
    const computerIconParagraph = document.createElement('p');
    computerIconParagraph.textContent = 'COMPUTER';

    if(computerSelection == playerSelection){
        historyRound.textContent = `Round ${roundCount} : TIE ! `;
    }
    else{
        switch(true){
            case (playerSelection == moves[0] && computerSelection == moves[2]) :
            case (playerSelection == moves[1] && computerSelection == moves[0]) :
            case (playerSelection == moves[2] && computerSelection == moves[1]) :
                playerScore++;
                historyRound.textContent = `Round ${roundCount} : WIN !`;
            break;
            default :
                computerScore++;
                historyRound.textContent = `Round ${roundCount} : LOSE !`;
            break;
        }
    }
    newEntry.appendChild(historyRound);
    playerDisplayedIcon.setAttribute('class',playerIconToDisplay);
    computerDisplayedIcon.setAttribute('class', computerIconToDisplay);
    playerIconParagraph.appendChild(playerDisplayedIcon);
    computerIconParagraph.appendChild(computerDisplayedIcon);
    iconsDiv.appendChild(playerIconParagraph);
    iconsDiv.appendChild(computerIconParagraph);
    newEntry.appendChild(iconsDiv);

    if(!document.querySelector('.game-history-element')){
        history.appendChild(newEntry);
    }
    else{
        history.insertBefore(newEntry, document.querySelector('.game-history-element'));
    }
}

const updateRound = () => {
    roundCount ++;
    roundCounter.textContent = `Round : ${roundCount}`;
}

const updateScores = () => {
    const playerScoreDisplay = document.querySelector('.player-score-display');
    const computerScoreDisplay = document.querySelector('.computer-score-display');
    playerScoreDisplay.textContent = `${playerScore}`;
    computerScoreDisplay.textContent = `${computerScore}`;
}

const resetScoreAndRounds = () => {
    playerScore = 0;
    computerScore = 0;
    roundCount = 0;  
};

const checkResult = () => {
    const resultsDisplay = document.querySelector('.results');
    if(playerScore == 5 || computerScore == 5){
        iconsContainer.style.visibility = 'hidden';
        resultsContainer.style.display = 'block';
        if(playerScore == 5){
            resultsDisplay.textContent = `Congrats ! you WIN \\o/`;
        }
        else if(computerScore == 5){
            resultsDisplay.textContent = `Too bad ! you LOSE ...`;
        }
    }
}

const playRound = () => {
    computerPlay();
    updateRound();
    compareMoves();
    updateScores();
    checkResult();
}

const startGame = () => {
    updateScores();
    rulesContainer.style.display = 'none';
    scoreContainer.style.display = 'block';
    resultsContainer.style.display = 'none';
    insertIcons();
    setIconsEventListeners();
};

startButton.addEventListener('click', startGame);
restartButton.addEventListener('click', function(){
    resetScoreAndRounds();
    updateScores();
    roundCounter.textContent = 'Round : 0';
    resultsContainer.style.display = 'none';
    iconsContainer.style.visibility = 'initial';
    history.textContent = '';
});