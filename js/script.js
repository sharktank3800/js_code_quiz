var timer = document.querySelector("#Start-timer");

var mainPart = document.querySelector(".main");

var questionH1 = document.querySelector("h1");

var div = document.querySelector("div");

var options = document.querySelector(".options");

var alert = document.querySelector(".clicked-alert");

var start = document.querySelector("#StartBtn");

var time =  75;

var currentQuestionIndex = 0;

var question;

var intervalID;





function displayQuestions(){

    question = questions[currentQuestionIndex];
    questionH1.innerHTML = question.text;

    options.innerHTML = "";

    question.choices.forEach(function(choice){
        options.insertAdjacentHTML("beforeend", "<button>" + choice + "</button>");
    });

}



function showHighscore(){

    localStorage.setItem("score", time);
    window.location = "./highScores.html";
}



function AnswerCheck(event){


            var choiceButtons = document.querySelectorAll(".choice")
            choiceButtons.forEach(function(button){
                button.addEventListener("click",AnswerCheck);
            });
            

            var clickedChoice = event.target.textContent;
            var currentQuestion = question;

            if (clickedChoice === currentQuestion.correctAnswer) {
                alert.innerHTML = "Correct!";
            } else {
                alert.innerHTML = "wrong!";
                time -= 10;
            }

            currentQuestionIndex++;
            
            if (currentQuestionIndex < questions.length){
                displayQuestions();
            } else {
                clearInterval(intervalID);
                timer.innerHTML = "Timer: 0";
                showHighscore();
                alert.innerHTML = "Quiz Finished!";
            }




};






function startQuiz(){


    div.classList.add("hide");
    start.classList.add("hide");

    displayQuestions();


      intervalID = setInterval(function(){
        time--;
        timer.innerHTML = "Timer:"+ time;

        if (time <= 0) {
            clearInterval(intervalID);
            timer.innerHTML = "Timer: 0";
            alert.innerHTML = "Times up!";
        }

    }, 1000)

};



start.addEventListener("click", startQuiz);
options.addEventListener("click", AnswerCheck);