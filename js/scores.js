function displayScores(){
    //var storedHighScores = JSON.parse(window.localStorage.getItem("highscores")) || [];
    //var storedHighScores = localStorage.getItem("highscores");
    //console.log(storedHighScores)

    highScoresEl = document.getElementById("highscores").innerHTML;
    //data = JSON.stringify(window.localStorage.getItem("highscores"));
    data = JSON.parse(window.localStorage.getItem("highscores")) || [];


    var score = data.score //this is wrong was trying things out

    console.log(data)

}

displayScores();