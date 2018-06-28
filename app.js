$(document).ready(function () {

let playerScore = 0;
let computerScore = 0;
let instructionMsg = "Click Rock, Paper or Scissors to Start.";

$(".choice-img").on("click", function(){
    let compChoice = computerPlay();
    $(".circle-divs").css('background-color', '#f4f4f4');
    $(this).parent().css("background-color", "#7ED321");
    $('#question-mark-img').prop('src', 'images/' + compChoice + '.png');
    playerMove(this.id, compChoice, playerScore, computerScore);  
});

$("footer").on("click", function(){
    reset();
});

function computerPlay(){
    let randomThird = Math.round(Math.random()*100);
    console.log(randomThird);
    if(randomThird > 0 && randomThird < 33){
        return "rock-img";
    }
    if(randomThird >= 33 && randomThird < 66){
        return"paper-img";
    }
    if(randomThird >= 66 && randomThird < 100){
        return "scissors-img";
    }
}

function computeResult(playerSelection, computerSelection) {
    let result = "";
    if(playerSelection == "rock-img" && computerSelection == "paper-img"){
        result = "You Lose! Paper beats Rock.";
        computerScore = computerScore + 1;
    }
    if(playerSelection == "paper-img" && computerSelection == "scissors-img"){
        result = "You Lose! Scissors beats Paper.";
        computerScore = computerScore + 1;
    }
    if(playerSelection == "scissors-img" && computerSelection == "rock-img"){
        result = "You Lose! Rock beats Scissors.";
        computerScore = computerScore + 1;
    }
    if(playerSelection == "paper-img" && computerSelection == "rock-img"){
        result = "You Win! Paper beats Rock.";
        playerScore = playerScore + 1;
    }
    if(playerSelection == "scissors-img" && computerSelection == "paper-img"){
        result = "You Win! Scissors beats Paper.";
        playerScore = playerScore + 1;
    }
    if(playerSelection == "rock-img" && computerSelection == "scissors-img"){
        result = "You Win! Rock beats Scissors.";
        playerScore = playerScore + 1;
    }
    if(playerSelection == computerSelection){
        result = "Draw! Try Again."
    }  
    updateScoreColor();
    return result;
}

function playerMove(playerSelection, computerSelection){
   instructionMsg = computeResult(playerSelection, computerSelection); 
   update();
   if(playerScore === 5){
    instructionMsg = "Comgrats!!! You Have Won The War. Resetting...";
    update();
    $('.choice-img').css('visibility', 'hidden');
    $('.circle-divs').css('visibility', 'hidden');
    setTimeout(function(){ 
        reset();
    }, 3000);
    }
    if(computerScore === 5){
        instructionMsg = "This time you lost!!! Don't lose hope. Resetting...";
        update();
        $('.choice-img').css('visibility', 'hidden');
        $('.circle-divs').css('visibility', 'hidden');
        setTimeout(function(){ 
            reset(); 
        }, 3000);
    }
}

function updateScoreColor(){
    if(playerScore > computerScore){
        $('#player-score-txt').css('color', '#7ED321');
        $('#computer-score-txt').css('color', 'red');
    }else if(playerScore < computerScore)
    {
        $('#player-score-txt').css('color', '#7ED321');
        $('#computer-score-txt').css('color', 'red');
    }else{
        $('#player-score-txt').css('color', '#fc6429');
        $('#computer-score-txt').css('color', '#fc6429');
    }
}

function update(){
    document.getElementById('player-score-txt').innerHTML = playerScore;
    document.getElementById('computer-score-txt').innerHTML = computerScore;
    document.getElementById('instruction-txt').innerHTML = instructionMsg;
}
update();

function reset(){
    playerScore = 0;
    computerScore = 0;
    instructionMsg = "Click Rock, Paper or Scissors to Start.";
    $(".circle-divs").css('background-color', '#f4f4f4');
    $('#question-mark-img').prop('src', '/images/question-mark-img.png');
    updateScoreColor();
    $('.choice-img').css('visibility', 'visible');
    $('.circle-divs').css('visibility', 'visible');
    update();
}
});
