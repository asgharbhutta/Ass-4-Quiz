//Questions to be used during the quiz
var questions = [
    {
        title: "What colour is the sky",
        choices: ["blue","red","black","yellow"],
        answer: "blue"
    },
    {
        title: "What direction is north",
        choices: ["north","east","south","west"],
        answer: "north"
    },
];

//initializing variables
var currentQuestionIndex = 0;
var time = 50;
var timerId;

//DOM reference variables
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials")
var feedbackEl = document.getElementById("feedback");
var endScreenEl = document.getElementById("end-screen");

function startQuiz(){
    //hide initial screen
    var startScreenEl = document.getElementById("start-screen");
    startScreenEl.setAttribute("class", "hide");

    //unhide questions section
    questionsEl.removeAttribute("class");

    //activate timer
    timerId = setInterval(clockTick, 1000);
    timerEl.textContent = time;

    getQuestion();
}

function getQuestion(){
    //get question and titles
    var currentQuestion = questions[currentQuestionIndex];
    var titleEl = document.getElementById("question-title");
    titleEl.textContent = currentQuestion.title;

    //clear old questions
    choicesEl.innerHTML = "";

    //loop time
currentQuestion.choices.forEach(function(choice,i) {
    //button creation
    var choiceNode = document.createElement("button");
    choiceNode.setAttribute("class","choice");
    choiceNode.setAttribute("value", choice);
    choiceNode.textContent = i + 1 + ". " + choice;

    //click event listener
    choiceNode.onclick = questionClick;

    //display the button choices on page
    choicesEl.appendChild(choiceNode);
    });  
}

function questionClick() {
    //check the answer
    if(this.value !== questions[currentQuestionIndex].answer){
        //take time off if wrong
        time = time - 15;

        if(time < 0){
            time = 0;
        }

        timerEl.textContent = time;

        feedbackEl.textContent = "Wrong!";
    } 
    else{
        feedbackEl.textContent = "Correct!";
    }
    
    //next question
    currentQuestionIndex++

    //check if any questions remain
    if(currentQuestionIndex === questions.length){
        quizEnd();
    } else{
        getQuestion();
    }
}

function quizEnd(){

    endScreenEl.setAttribute("class","start");

    //stop timer
    clearInterval(timerId);

    var finalScore = document.getElementById("final-score");
    finalScore.textContent = time;

    //hide questions
    questionsEl.setAttribute("class","hide");
}

function clockTick(){
    //checking the time
    time--;
    timerEl.textContent = time;

    //did user run out of time?
    if(time <= 0){
        quizEnd();
    }
}

function saveHighScore(){
    //grab initials from input
    var initials = initialsEl.value.trim();
    if(initials !== ""){
        var highscores = JSON.parse(window.localStorage.getItem(highscores)) || [];

        var newScore = {
            score: time,
            initials: initials
        };

        //save to local
        highscores.push(newScore);
        window.localStorage.setItem("highscores", JSON.stringify(highscores));

        window.location.href="highscores.html";
    }
}

function checkForEnter(event){
    if(event.key === "Enter"){
        saveHighScore();
    }
}

submitBtn.onclick = saveHighScore;

startBtn.onclick = startQuiz;

initialsEl.onkeyup = checkForEnter;




