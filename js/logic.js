//initializing variables
var currentQuestionIndex = 0;
var time = 50;
var timerId;

//DOM reference variables
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = documenet.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials")

function startQuiz(){
    //hide initial screen
    var startScreenEl = document.getElementById("start-screen");
    startScreenEl.setAttribute("class", "hide");

    //unhide questions section
    questionsEl.removeAttribute("class");
}

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

//logic for quiz game starts here


