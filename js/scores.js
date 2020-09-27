function displayScores(){
    var highScoresEl = document.getElementById("highscores");
    var data = JSON.parse(window.localStorage.getItem("highscores"));
    if(data){
        highScoresEl.innerHTML = "<p>Initials: " + data[0]['initials'] + "</p><p>Score: " + data[0]['score'] + "</p>";
    }else{
        console.log("didn't work");
    }
}


function clearScores(){

    localStorage.clear();

    initials = "";
    score = 0;

    var highScoresEl = document.getElementById("highscores");
    if(highScoresEl){
        highScoresEl.innerHTML = "<p>Initials: " + initials + "</p><p>Score: " + score + "</p>";
    }else{
        console.log("didn't work");
    }

}

displayScores();