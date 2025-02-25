let input;
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", ()=> {
        input = button.id;
        playRound(input, getComputerChoice());
        //console.log(button.id + " was clicked.");
    });
}
);

// get computer choice: determines if computer selects rock, paper, or scissors
function getComputerChoice(){
    let computerChoice = (Math.floor(Math.random() * 3) + 1);
    if(computerChoice === 1){
        console.log("computer choice: rock");
        return "rock";
    } else if(computerChoice === 2){
        console.log("computer choice: paper");
        return "paper";
    } else {
        console.log("computer choice: scissors");
        return "scissors";
    }
}

    function playRound(humanChoice, computerChoice){
        let computerScore = 0;
        let humanScore = 0;
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
        //scoreboard
        let humanCounter = document.querySelector("#human");
        humanCounter.textContent = humanScore.toString();
        let computerCounter = document.querySelector("#computer");
        computerCounter.textContent = computerScore.toString();

    }