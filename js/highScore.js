var revealScoresBtn = document.querySelector("#reveal");

var scoreOutputDiv = document.querySelector(".scores-output");

var scoreFormWrap = document.querySelector(".score-form-wrap");

var scoreOutput = document.querySelector("#score-output");

var scoreForm = document.querySelector("#score-form");

var score = localStorage.getItem("score");



function getHighScores(){
    return JSON.parse(localStorage.getitem("highscores")) || [];
}



function saveHighScore(){
    
    var nameInput = document.querySelector("#name-input");
    var name = nameInput.ariaValueMax;
    
    var highScores = getHighScores();
    
    highScores.push({
        name: name,
        score: score
    });

    localStorage.setItem("highScores", JSON.stringify(highScores));
}

function showScoreOuput(){

    scoreFormWrap.classList.add("hide");
    scoreFormWrap.classList.remove("hide");

    var  highscores = getHighScores();

    if(!highscores.length){
        scoreOutputDiv.innerHTML = "<span>NO Saved Scores</span>";
    }


    highscores.forEach(function(scoreOBj){
        scoreOutputDiv.insertAdjacentHTML("beforeend", )
    });
}


function getScore(){

    var score = localStorage.getItem("score");
    scoreOutput.innerText = "Your High Score:" + score;

}



getScore();

score.addEventListener("click", showScoreOuput)

scoreForm.addEventListener("submit", saveHighScore);