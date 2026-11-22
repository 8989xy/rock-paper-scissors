// 'let' is usually if something is going to change/be redeclared later, 'const' is if something isn't:
//people usually say 'use 'const' unless something breaks then use 'let'
//in this case you cannot use 'const' for these: they're global variables
//or rather: let = var [not really but kinda]
//you only want to call something a variable if it actually is a variable or else you might
//accidentally redeclare
let humanScore = 0;
let computerScore = 0;
let roundNumber = 0;


function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 3);

  if (computerChoice == 2) {
    return "rock";
  } else if (computerChoice == 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

//humanChoice needs to be let but computerChoice is a constant number
//also because i'm stupid: math.random is a random number from 0 to 1 not including 1
//math.floor rounds DOWN to the nearest whole integer (if you wanna do round up it's math.ceil)
//THEREFORE multiplying it by a number like 3 will give a range from 0 to 3 not including 3
//and rounding will make the results 0, 1, or 2

function GetHumanChoice() {
  let humanChoice = prompt("Type in rock, paper, or scissors!");
  if (humanChoice !== null) {
    // toLowerCase and 'trim' functions serve to make ROCK or RoCk or rock       a valid choice
    //but you can't do that if someone enters nothing in the textbox
    //this is just to prevent it crashing
    humanChoice = humanChoice.toLowerCase().trim();
  }
  return humanChoice;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    alert("It's a draw!");
  } else if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock")
  ) {
    alert(`The computer wins! ${computerChoice} beats ${humanChoice}!`);
    computerScore++;
  } else {
    alert(`You win! ${humanChoice} beats ${computerChoice}!`);
    humanScore++;
  }
  roundNumber++;
}
//as you might know ++ increases a constant by 1
//this function takes advantage of the fact that we'll have 3 outcomes
//either player and computer pick the same thing [draw]
//they pick different things [player loses]
//or they pick different things [computer loses]
//if it's equal, it's a draw, if it's rock vs paper or paper vs scissors or scissors vs rock 
//the human loses and any other outcome means the computer loses
//this way only 3 outcomes need to be declared
//without having to fully type out every possible outcome

function displayStats() {
  alert(`This is round ${roundNumber} of 5!
          You won ${humanScore} times!
          The computer won ${computerScore} times!    
    `);
  if (roundNumber === 5) {
    if (humanScore > computerScore) {
      alert("You won the match! Yay!");
    } else if (humanScore < computerScore) {
      alert("You lost the match!");
    } else {
      alert("You tied with the computer!");
    }
  }
}

function endGame() {
  alert("Thanks for playing! Refresh if you want to play again!");
}

function playGame() {
  while (roundNumber < 5) {
    const humanChoice = GetHumanChoice();
    if (humanChoice === null) {
      if (confirm("End the game?")) break; // this is a yes/no question, this is yes
      continue; // this is no
    }
    if (
      humanChoice !== "rock" &&
      humanChoice !== "paper" &&
      humanChoice !== "scissors"
    ) {
      alert("Please type rock, paper, or scissors only!");
      continue;
    }
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    displayStats();
  }
  endGame();
}
//this is a 'while' loop [while the round number is less than 5] 
//and it uses the global variables we declared earlier
//also: because i'm stupid part 2: if you see a function earlier in the code
//and then you see it called again but just as functionname() later on that's just Calling the function again
//if you forget what it does scroll up 

playGame();
