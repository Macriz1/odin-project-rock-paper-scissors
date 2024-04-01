let playerChoices= document.querySelectorAll('.button-choice');
// let testing = document.queryelector('#Rock');
let displayComputerChoice = document.querySelector('.computer-select')
let displayOutcome = document.querySelector('.score-container');
let rounds = document.querySelector('.display-round');
let playerScores = document.querySelector('.display-player-score');
let computerScores = document.querySelector('.display-computer-score');


const computerChoices = ['Rock', 'Paper', 'Scissors'];



let gameRound = 1;
let playerScore = 0;
let computerScore = 0;



playerChoices.forEach((choice) =>{
    
    choice.addEventListener('click', ()=>{
        let playerChoice = choice.id;
        let computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        let result = document.createElement('p')
        let display = '';
       

        if(playerChoice === computerChoice){
            display = computerChoice;
            gameRound += 1;
            result.textContent = `This is a tie, computer choose : ${display} why  player choose : ${choice.id}`;

        }else if (
            (playerChoice == 'Rock' && computerChoice == 'Scissors') || (playerChoice == 'Paper' && computerChoice == 'Rock') || (playerChoice= 'Scissors' && computerChoice == 'Paper')
        ){
             display = computerChoice;
            gameRound += 1;
            playerScore += 1;
            result.textContent = `you win, computer choose : ${display} why  player choose : ${choice.id}`;

        }else{
            display = computerChoice;
            gameRound += 1;
            computerScore += 1;
            result.textContent = `you lose, computer choose : ${display} why  player choose : ${choice.id}`;

        }

        if(gameRound == 6){
            if(playerScore > computerScore){
                result.textContent = `player wins with ${playerScore} point`;
            }else{
                result.textContent = `computer wins with ${computerScore}`
            }

            playerScore = 0;
            gameRound = 0;
            computerScore = 0;
        }


    


        displayComputerChoice.textContent = display;
        displayOutcome.appendChild(result);
        computerScores.textContent = computerScore;
        playerScores.textContent = playerScore;
        rounds.textContent = gameRound;

      
    })

})


























