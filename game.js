// let userInput = prompt('playing a game of rock, paper and scissors, please choose rock, paper or scissors', 'rock').toLocaleLowerCase();

// created a variable that generate 3 random numbers from 0 - 1
// compared the variable to each instance , 0 = "rock", 1 = "paper", 2 = "scissors"

function getComputerChoice(){
    const randNumber = (Math.floor(Math.random() * 3));

    if (randNumber === 0){
        return "rock";
    }else if(randNumber === 1){
        return "paper";
    }else{
        return "scissors";
    }
    
    
}

 function playRound(playerSelection, computerSelection){

    if(playerSelection == "rock" && computerSelection == "rock"){
        return "rock tie with rock, this is a draw";
        
    }else if(playerSelection == "paper" && computerSelection == "rock"){
        return "you win paper covers rock";
    
    }else if(playerSelection == "scissors" && computerSelection == "rock"){
        return "you lose rock breaks scissors";
        
    }else if(playerSelection == "paper" && computerSelection == "paper"){
         return "paper tie paper, this is a tie";
         
    }else if(playerSelection == "rock" && computerSelection == "paper"){
        return "you lose paper covers rock";
        
    }else if(playerSelection == "scissors" && computerSelection == "paper"){
        return "you win scissors cuts paper";
    
    }else if(playerSelection == "rock" && computerSelection == "scissors"){
         return "you win rock breaks scissors";

    }else if(playerSelection == "paper" && computerSelection == "scissors"){
        return "you lose scissors cuts paper";
        
    }else if(playerSelection == "scissors" && computerSelection == "scissors"){
        return "scissors tie with scissors, this is a draw";

    }else{
        return "incorrect input check spelling";
    }
 }

//  const playerSelection = userInput;
//  const computerSelection = getComputerChoice();


// console.log(playRound(playerSelection, computerSelection));
 
let playerScore = 0;
let computerScore = 0;

 function playGame(){


    playerInput = prompt('rock, paper or scissors', "rock").toLocaleLowerCase();
    computerValue = getComputerChoice();
    checkOutcome = playRound(playerInput, computerValue);
 
   
   if(checkOutcome.startsWith("you win")){
        playerScore = playerScore + 1;
        return playerScore;
           
   }else if(checkOutcome.startsWith("you lose")){
        computerScore = computerScore + 1;
        return computerScore;
   }else{
        return "this is a tie";
   }

   

   

 

 }



 playGame();
 console.log(playRound(playerInput, computerValue));
 console.log(`computer score is : ${computerScore} why user score is :  ${playerScore}`);
 playGame();
 console.log(playRound(playerInput, computerValue));
 console.log(`computer score is : ${computerScore} why user score is :  ${playerScore}`);
 playGame();
 console.log(playRound(playerInput, computerValue));
 console.log(`computer score is : ${computerScore} why user score is :  ${playerScore}`);
 playGame();
 console.log(playRound(playerInput, computerValue));
 console.log(`computer score is : ${computerScore} why user score is :  ${playerScore}`);
 playGame();
 console.log(playRound(playerInput, computerValue));
 console.log(`computer score is : ${computerScore} why user score is :  ${playerScore}`);

 function finalResult(){
    if(computerScore < playerScore){
        return "user wins"
    }else if(computerScore > playerScore){
        return "computer wins"
    }else{
        return "the game ends in a tie"
    }
 }

 console.log(finalResult());

 

 

// console.log(playGame());
// console.log(playGame());
// console.log(playGame());
// console.log(playGame());
// console.log(playGame());

