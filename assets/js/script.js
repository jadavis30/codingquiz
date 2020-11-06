/*Coding quiz will have
 a countdown timer, 
 multiple questions, 
 multiple choice boxes 
    (maybe short answer?)
hover feature to change color of buttons 
needs to state right or wrong at the bottom on next screen
subtract time when answered wrong
timer reaches 0 game ends
moves to next question auto
view high scores link
start quiz page
last page allows user to either play again or clear high scores
needs to tally high score
allow user to record high score with initials */

Reference for code:
https://www.sitepoint.com/simple-javascript-quiz/

//global variables for localStorage
var nameInput = document.querySelector("#name-input");
var scoreSave = document.querySelector('#high-score-saved');
var msgDiv = document.querySelector('#msg');
var userPasswordSpan = document.querySelector('#user-password');
//timer
var timerEl = document.getElementById("countdown");
var mainEl = document.getElementById("main");
var startBtn = document.getElementById("start");

//message to display at end
var message =
    "Get Steezy!";
var words = message/split (" ");

function countdown() {
    var timeLeft = 5;
    // countdown function
    var timeInterval = setInterval(function(){
        if(timeLeft <= 0) {
            clearInterval(timeInterval);
            timerEl.textContent = "Done";
            displayMessage();
        } else {
            timerEl.textContent =timeLeft + "seconds left";
        }
        timeLeft -=1;
        }, 1000);
    }

}

function displayMessage() {
    var wordCount = 0;

    // Uses the `setInterval()` method to call a function to be executed every 300 milliseconds
  var msgInterval = setInterval(function() {
    if (words[wordCount] === undefined) {
      clearInterval(msgInterval);
    } else {
      mainEl.textContent = words[wordCount];
      wordCount++;
    }
  }, 300);
}

startBtn.onclick = countdown;

}

//array of questions
var questions = [
    {
        question: "Which one of these is not a Trek mountain bike?",
        answer: [SuperCaliber = false, Roscoe = false, Madone = true, Marlin = false],
    },
    {
        question: "2+2 = 5",
        answer: false,

    },
    {
        question: "Rockshox Zeb forks are single-crown forks featuring up to 190mm of travel.",
        answer: true,
    
    },
    {
        question: "Their going to the mall.",
        answer: false,
        
    },
    {
        question: "They're going to the movies.",
        answer: true,
            
    },
    {
        question: "Supercaliber features flex seat stays and an integrated frame shock.",
        answer: true,
                
    },
    {
        question: "Aeolous Pro 37 wheels were named wheels of the year by Bicycling Magazine.",
        answer: true,
                    
    }
    ]

//keeping track of score
var score = 0;

//iterating through array
for(let i = 0; i < questions.length; i++) {
    var userAnswer = confirm(questions[i].question);
if(userAnswer === questions[i].answer){
    score++;
    //alert("Correct!"); isn't the command for here, but we do need to carry this over
} else {
    //alert("Wrong!");
}
};    
alert("Finished! Your score was " + score + " out of " + questions.length);


//retrieving localStorage
function renderHighScore() {
    var name = localStorage.getItem("name-input");
    var highScore = localStorage.getItem("high-score-saved");
    if (name === "null" || highScore === "null") {
        return;
    }
.textContent = name;
.textContent = highScore;    
};

//display scores
renderLastScores();

//message to play at the end
function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute('class', type);
}

//when hitting submit scores
savedScores.addEventListener("click", function(event) {
    event.preventDefault();

    var name = document.querySelector("#name-input").value;
    var scoreSave =document.querySelector("#high-score-saved").value;

    if(name ==="") {
        displayMessage("Woah dude! Leave your name for the other shredders, please!");
    } else {
        displayMessage("Solid effort, my dude! Nice score!");

        localStorage.setItem("name", name);
        localStorage.setItem("high-score-saved", highScore);
        renderLastScores();
    }
});