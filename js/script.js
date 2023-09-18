var timer = document.querySelector("#Start-timer");

var mainPart = document.querySelector(".main");

var questionH1 = document.querySelector("h1");

var choicelist = document.querySelector(".choices");

var start = document.querySelector("#StartBtn");

var time =  75;

var curentQuestionIndex = 0;

var question;



function displayQuestions(){

    

}


function AnswerCheck(){

}




function startQuiz(){

    mainPart.classList.add("hide");
    start.classList.add("hide");

    displayQuestions();

    var intervalID = setInterval(function(){
        time--

    })




}

start.addEventListener("click", startQuiz);