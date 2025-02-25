let input;
let computerScore = 0;
let humanScore = 0;
function scoreBoard(message, score){
    let result = document.querySelector("#result");
    let humanCounter = document.querySelector("#human");
    let computerCounter = document.querySelector("#computer");
    result.textContent = message;
        switch(score){
            case "human":
                humanScore += 1;
                humanCounter.textContent = humanScore.toString();
                break;
            case "computer":
                computerScore += 1;
                computerCounter.textContent = computerScore.toString();
                break;
            case "tie":
                break;
        }        
    }

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
        if(humanChoice === computerChoice){
            scoreBoard('It\'s a tie! Try again.', "tie")
            //console.log('It\'s a tie! Try again.');
        }
        else if(humanChoice === 'paper'){
            if(computerChoice === 'rock'){
                scoreBoard('Paper beats rock! +1 for humanity.', "human")
                // console.log('Paper beats rock! +1 for humanity.');
                // humanScore++;
            } else if(computerChoice === 'scissors') {
                scoreBoard('Scissors beats paper! +1 for the machines.', "computer")
                // console.log('Scissors beats paper! +1 for the machines.')
                // computerScore++;
            }
        }
        else if(humanChoice === 'scissors'){
            if(computerChoice === 'paper'){
                scoreBoard('Scissors beats paper! +1 for humans.', "human")
                // console.log('Scissors beats paper! +1 for humans.');
                // humanScore++;
            } else if(computerChoice === 'rock'){
                scoreBoard('Rock smashes scissors. Bummer.', "computer")
                // console.log('Rock smashes scissors. Bummer.');
                // computerScore++;
            }
        }
        else if(humanChoice === 'rock'){
            if(computerChoice === 'paper'){
                scoreBoard('Paper smothers rock. One more for the machines.', "computer")
                // console.log('Paper smothers rock. One more for the machines.');
                // computerScore++;
            } else if(computerChoice === 'scissors'){
                scoreBoard('Rock smashes scissors. Humanity triumphs!', "human")
                // console.log('Rock smashes scissors. Humanity triumphs!');
                // humanScore++;
            }
        }
    } 


    
