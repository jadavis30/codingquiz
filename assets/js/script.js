var startButton = document.getElementById("start-btn");
var resetButton = document.getElementById("restart-btn");
var questionContainerElement = document.getElementById("question-container");
var questionElement = document.getElementById("question");
var answersContainer = document.getElementById("answers");
var shuffledQuestions, currentQuestionIndex;
var controls = document.getElementById("controls");
var resetControls = document.getElementById("reset-controls");
var countElement = document.getElementById("count");
var submitScoreContainer = document.getElementById("score-submit");
var highScoreContainer = document.getElementById("high-scores");
var highScoreListContainer = document.getElementById("high-score-list");
var userInitials = document.getElementById("user-initials");
var isPlaying = false;
var count = 60;
var loserContainer = document.getElementById("loser-container");
var finalScore = 0;
var timer;

function startGame() {
    count = 50;
    isPlaying = true
    controls.classList.add("hide");
    loserContainer.classList.add("hide");
    submitScoreContainer.classList.add("hide");
    highScoreContainer.classList.add("hide");
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove("hide")
    nextQuestion()
    timer = setInterval(function(){
        countElement.textContent="Time Left: " + count;
        if (isPlaying && count <= 0){
            alert("You're out of trail!");
            endGame(false);
        }
        count--;
    }, 1000); 
    
}

function endGame(victory) {
    clearInterval(timer);

    countElement.textContent = "Time Left: " + count;
    isPlaying = false;
    restartControls.classList.remove("hide");
    questionContainerElement.classList.add('hide');

    if(!victory) {
        loserContainer.classList.remove("hide");
    }
    else {
        submitScoreContainer.classList.remove("hide");
    }
}    

function submitScore () {
    var initials = userInitials.value;
    
    if (!initials || initials.trim() === "") { 
       alert("Please enter your initials");
       return; 
    }

    var score = {
        score: finalScore,
        user: initials
    }

    var scoresString = localStorage.getItem("highscore");
    
    var scores = [];

    if (scoresString) {
        scores = JSON.parse(scoreString);
    }

    scores.push(score);
    scores.sort(sortScores);
    
    highScoreListContainer.innerHTML = "";
    scores.forEach(score => {
        var scoreListItem = document.createElement("li");
        var highScoreName = document.createElement("div");
        var highScoreValue = document.createElement("div");

        scoreListItem.classList.add("high-score-entry");
        highScoreName.classList.add("high-score-name");
        highScoreValue.classList.add("high-score-value");

        highScoreName.innerText = score.user;
        highScoreValue.innerText = score.score;

        scoreListItem.appendChild(highScoreName);
        scoreListItem.appendChild(highScoreValue);

        highScoreListContainer.appendChild(scoreListItem);

    });

    localStorage.setItem("highscore", JSON.stringify(scores));

    submitScoreContainer.classList,add("hide");
    highScoreContainer.classList.remove("hide");
}

function sortScores(a, b) {
    return b.score -a.score;
}

function nextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    resetQuestion();

    questionElement.innerText = question.questionText;
    answersContainer.dataset.correctAnswer = question.correctAnswer;
    question.answers.forEach(answer => {
        var answerBtn = document.createElement("button");
        
        answerBtn.classList.add("btn");
        answerBtn.addEventListener("click",selectAnswer);
        answerBtn.dataset.answerKey = answer.key
        
        answerBtn.innerHTML = answer.text;
        
        answersContainer.appendChild(answerBtn);
    })
}

function resetQuestion() {
    answersContainer.innerHTML = '';
    questionElement.innerHTML = '';
}

function selectAnswer(event) {
    const selectedButton = event.target;

    var answerNode = selectedButton.parentNode;

    var selectAnswerKey = selectedButton.dataset.answerKey;
    var correctAnswerKey = answerNode.dataset.correctAnswer;

    if (selectAnswerKey === correctAnswerKey) {
        count += 5;
        alert('Correct Bro!');
    }
    else {
        count -= 10;
        alert('Wrong dude!');
    }
    
    if (shuffledQuestions.length > currentQuestionIndex + 1){
        currentQuestionIndex ++;
        nextQuestion();
    }

    else {
        finalScore = count;
        endGame(true);
       
    }   
}


const questions = [
    {
        questionText: "What is a common component of a trail-ready bicycle?",
        answers: [
            {
                key: "A",
                text:"Drop bars"
            },
            { 
                key: "B",
                text:"Aerodynamic tubing"
            },
            {
                key:"C",
                text: "Suspension fork"
            },
            {
                key: "D",
                text:"700x25c"
            }
        ],
        correctAnswer: "C"    
    },
    {
        questionText: "Tubeless mountain bike tires require high air pressure to function.",
        answers: [
            {
                key: "A",
                text: "True"
            },
            {
                key: "B",
                text: "False"
            }
        ],
        correctAnswer: "B"
    },
    {
        questionText: "Which of the following are frame materials used in bicycle manufacturing?",
        answer: [
            {
                key: "A",
                text: "Steel"
            },
            { 
                key: "B",
                text: "Aluminum"
            },
            { 
                key: "C",
                text: "Carbon fiber"
            },
            {
                key: "D", 
                text: "All of the above"
            }
        ],
        correctAnswer: "D"
    },
    {
        questionText: "Smoother tread is preferable for technical, rooty riding.",
        answer: {
            A:"True",
            B:"False"
        },
        correctAnswer: "False"
    },
    {
        questionText: "Which of these mountain bike disciplines involves timed sections of downhill riding, with untimed climbs?",
        answer: [
            {
                key: "A",
                text:"XC"
            },
            { 
                key: "B",
                text:"Downhill" 
            },
            {            
                key: "C",
                text:"Enduro"
            },
            {
                key: "D",
                text:"Dual Slalom"
            }    
        ],
        correctAnswer: "C"
    }
];    