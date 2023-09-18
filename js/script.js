var timer = document.querySelector("#Start-timer");

var mainPart = document.querySelector(".main");

var questionH1 = document.querySelector("h1");

var div = document.querySelector("div");

var choicelist = document.querySelector(".options");

var start = document.querySelector("#StartBtn");

var time =  75;

var curentQuestionIndex = 0;

var question;



function displayQuestions(){
     
    question = questions[curentQuestionIndex];
    questionH1.innerHTML = question.Text;

    question.choices.forEach(function(choice){
        choicelist.insertAdjacentHTML("beforeend", "<button>" + choice + "</button>");
    })

}


function AnswerCheck(){

}




function startQuiz(){


    div.classList.add("hide");
    start.classList.add("hide");

    displayQuestions();


    var intervalID = setInterval(function(){
        time--

    })




}

start.addEventListener("click", startQuiz);