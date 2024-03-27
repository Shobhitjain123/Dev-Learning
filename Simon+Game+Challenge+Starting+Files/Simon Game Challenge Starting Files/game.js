const buttonColors = ["red", "blue", "green", "yellow"]
let gamePattern = [];
let userClickedPattern = [];
var level = 0;
var start = false;


$(document).keypress(function() {
    if(!start){
        $("#level-title").text("Level " + level);
        nextSequence();
        start = true;
    }
   
})

$(".btn").click(function () {
    var userChosedColor = $(this).attr("id");
    userClickedPattern.push(userChosedColor);
    // alert(userClickedPattern);
    checkAnswer(userClickedPattern.length - 1);
    playSound(userChosedColor);
    animatePress(userChosedColor);
})


function checkAnswer(currentLevel){
    // alert(userClickedPattern);
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log("Success");

        if(gamePattern.length === userClickedPattern.length){

            setTimeout(function(){
                nextSequence()
            }, 1000);

        }
    }
    else{

        playSound("wrong")

        $("body").addClass("game-over")
        setTimeout(function() {
            $("body").removeClass("game-over")
        }, 200)

        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();
        
    }
}


function nextSequence() {
    userClickedPattern = [];
    level++;
  
    $("#level-title").text("Level " + level);
  
      var randomNumber = Math.floor(Math.random() * 4);
      var randomChooseColor = buttonColors[randomNumber];
      gamePattern.push(randomChooseColor);
      $("#" + randomChooseColor).fadeOut(100).fadeIn(100);
      
      playSound(randomChooseColor)
  }

  function startOver(){
    gamePattern = [];
    start = false;
    level=0;
  }
  
function playSound(name){
    var audio = "sounds/" + name + ".mp3";
    var music = new Audio(audio);
    music.play()
}

function animatePress(currentColor){

    $("#" + currentColor).addClass("pressed")
      
    setTimeout(function() {$("#" + currentColor).removeClass("pressed")}, 100)

}



