function displayScores(){

    var highScoresEl = document.getElementById("highscores");
    var data = JSON.parse(window.localStorage.getItem("highscores"));
    if(data){
        highScoresEl.innerHTML = data;
    }else{
        console.log("didn't work");
    }
    
    console.log(data)
}

displayScores();