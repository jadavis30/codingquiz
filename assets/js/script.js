var startButton = document.getElementById("start-btn");
var questionContainerElement = document.getElementById("question-container");
var questionElement = document.getElementById("question");
var answerButtonsElement = document.getElementById("answers");
var shuffledQuestions, currentQuestionIndex;
var count = 60;
var highScore = localStorage.getItem("highscore");

function startGame() {
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove("hide")
    nextQuestion()
    var interval = setInterval(function(){
        document.getElementById("count").textContent="Time Left: " + count;
        count--;
        if (count === -1){
            clearInterval(interval)
            alert("You're out of time!")

        }
    }, 1000); 
    
}

function nextQuestion() {
    //resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}


function selectAnswer(event) {
    const selectedButton = event.target
    if (selectedButton === correctAnswer) {
        count +2;
    }
    else if (selectedButton === !correctAnswer) {
        count -5;
    }
    if (shuffledQuestions.length > currentQuestionIndex + 1){
        nextQuestion()
    } else {
        startButton.innerText = "Restart"
        startButton.classList.remove("hide")
    }   
}

const questions = [
    {
        question: "What is a common component of a trail-ready bicycle?",
        answers: {
            A:"Drop bars",
            B:"Aerodynamic tubing",
            C: "Suspension fork",
            D:"700x25c"
        },
        correctAnswer: "C"    
    },
    {
        question: "Tubeless mountain bike tires require high air pressure to function.",
        answers: {
            A: "True",
            B: "False"
        },
        correctAnswer: "B"
    },
    {
        question: "Which of the following are frame materials used in bicycle manufacturing?",
        answer: {
            A: "Steel", 
            B: "Aluminum", 
            C: "Carbon fiber", 
            D: "All of the above",
        },
        correctAnswer: "D"
    },
    {
        question: "Smoother tread is preferable for technical, rooty riding.",
        answer: {
            A:"True",
            B:"False"
        },
        correctAnswer: "False"
    },
    {
        question: "Which of these mountain bike disciplines involves timed sections of downhill riding, with untimed climbs?",
        answer: {
            A:"XC", 
            B:"Downhill", 
            C:"Enduro",
            D:"Dual Slalom",
        },
        correctAnswer: "C"
    }
];    

function answerCheck() {
    var currentQuestionIndex = question.question + 1;
    var element = document.getElementById("last-answer");
    element.innerHTML = question.question
};

function  scoreSubmit() {
    scoreSubmit.classList.remove("hide")
    count.textContent
}

startButton.addEventListener("click", startGame)
submitButton.addEventListener("click", scoreSubmit)

//function submitScore(){
    


/*
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
    "Nice! Now go ride!";
var words = message/split (" ");





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



//array of questions
var questions = [
    
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
}); */