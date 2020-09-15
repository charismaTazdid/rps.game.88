// part 1 : declear all variable 
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user_score");
const computerScore_span = document.getElementById("computer_score");
const scoreBoard_div= document.querySelector(".score_board");

const result_p= document.querySelector(".result > p");

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");


//This is an event listener . we add a event listener to get user and computer choice .

function main(){
    rock_div.addEventListener('click', function(){
        Game ("r");
        })
    paper_div.addEventListener('click', function(){
        Game ("p");
        })
    scissor_div.addEventListener('click', function(){
     Game("s");
        })
    }
    main();


//creat a function for get ComputerChoice 
function getComputerChoice(){
    const choice = ['r', 'p', 's']
    const randomNumber = Math.floor(Math.random()*3); 
    return choice[randomNumber];
    
}



function Game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case "rs": 
        case "sp":
        case "pr":
        win(userChoice, computerChoice);
        break;
        
        case "sr": 
        case "ps": 
        case "rp":
         lose(userChoice, computerChoice);
        break;

        case "rr": 
        case "pp": 
        case "ss":
       draw(userChoice, computerChoice);
        break;
    }
}
Game();

function win( userChoice, computerChoice){
    const userSmall = " user".fontsize(4).sup();
    const cmptrSmall = " cmptr".fontsize(4).sub();
    userScore ++;
    userScore_span.innerHTML= userScore;
    computerScore_span.innerHTML= computerScore;
    result_p.innerHTML= convert_letter(userChoice) + userSmall + " Beats " 
    + convert_letter(computerChoice) + cmptrSmall +  " & </br>  You Win! :)";
    document.getElementById(userChoice).classList.add('greenGlow');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('greenGlow') }, 500);
    }

function lose( userChoice, computerChoice){
    const userSmall = " user".fontsize(4).sub();
    const cmptrSmall = " cmptr".fontsize(4).sup();
    computerScore ++;
    userScore_span.innerHTML= userScore;
    computerScore_span.innerHTML= computerScore;
    result_p.innerHTML= convert_letter(userChoice) + userSmall + " Beats " 
    + convert_letter(computerChoice) + cmptrSmall + " & </br> You Lost (:";
    document.getElementById(userChoice).classList.add('redGlow');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('redGlow') }, 300);
    
    }
    
function draw( userChoice, computerChoice){
    const userSmall = " user".fontsize(4).sub();
    const cmptrSmall = " cmptr".fontsize(4).sub();
    userScore_span.innerHTML= userScore;
    computerScore_span.innerHTML= computerScore;
    result_p.innerHTML= convert_letter(userChoice) + userSmall + " Beats " 
    + convert_letter(computerChoice) + cmptrSmall + " & </br> It's Draw ||";
    document.getElementById(userChoice).classList.add('grayGlow');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('grayGlow') }, 500);
    
    }
        
            

//convert latter "r", "p", "s" to "rock, paper, scissor"
function convert_letter(letter){
    if(letter==="r") return "Rock";
    if(letter==="p") return "Paper";
    return "Scissor";

}

