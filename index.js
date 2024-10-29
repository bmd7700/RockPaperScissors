
// get computer choice: determines if computer selects rock, paper, or scissors
function getComputerChoice(){
    let computerChoice = (Math.floor(Math.random() * 3) + 1);
    if(computerChoice === 1){
        return "rock";
    } else if(computerChoice === 2){
        return "paper";
    } else {
        return "scissors";
    }
}

// solicit user for their selection of rock, paper, or scissors
function getHumanChoice(){
    let humanPrompt = prompt('Choose Rock, Paper, or Scissors: ');
    let humanChoice = humanPrompt.toLowerCase();
    if((humanChoice === 'rock') || (humanChoice === 'paper') || (humanChoice === 'scissors')){
        return humanChoice;
    } else {
        alert('That\'s not a real choice! Refresh and try again.');
        }
}

// logic to play a 5-round game
function playGame(){
    // initialize variables for human and computer score
    let humanScore = 0;
    let computerScore = 0;
    // logic to play a single round
    function playRound(humanChoice, computerChoice){
        if(humanChoice === computerChoice){
            console.log('It\'s a tie! Try again.');
        }
        else if(humanChoice === 'paper'){
            if(computerChoice === 'rock'){
                console.log('Paper beats rock! +1 for humanity.');
                humanScore++;
            } else if(computerChoice === 'scissors') {
                console.log('Scissors beats paper! +1 for the machines.')
                computerScore++;
            }
        }
        else if(humanChoice === 'scissors'){
            if(computerChoice === 'paper'){
                console.log('Scissors beats paper! +1 for humans.');
                humanScore++;
            } else if(computerChoice === 'rock'){
                console.log('Rock smashes scissors. Bummer.');
                computerScore++;
            }
        }
        else if(humanChoice === 'rock'){
            if(computerChoice === 'paper'){
                console.log('Paper smothers rock. One more for the machines.');
                computerScore++;
            } else if(computerChoice === 'scissors'){
                console.log('Rock smashes scissors. Humanity triumphs!');
                humanScore++;
            }
        }
        console.log("Human score: " + humanScore + " Computer score: " + computerScore);
    }

    //loop to play 5 rounds in a game
    for(let i = 0; i < 5; i++){
        let human = getHumanChoice();
        let computer = getComputerChoice();
        playRound(human, computer);
    }
}
console.log(playGame());
//console.log(getComputerChoice());
//console.log(getHumanChoice());