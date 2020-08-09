const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    // console.log(randomNumber);
    return choices[randomNumber];
}

function game(userChoice) {
    console.log(getComputerChoice());
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case 'rs':
        case 'pr':
        case 'sp':
            console.log("User wins!");
            break;
        case 'sr':
        case 'rp':
        case 'ps':
            console.log("Computer wins!");
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            console.log("Draw!");
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function () {
        console.log("rock clicked");
        game('r');
    })

    paper_div.addEventListener('click', function () {
        console.log("paper clicked");
        game('p');
    })

    scissors_div.addEventListener('click', function () {
        console.log("scissors clicked");
        game('s');
    })
}


main();