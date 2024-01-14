var timerInterval;
var timerElement = document.querySelector("#timer");
var startContainer = document.querySelector("#start-container");
var startBtn = document.querySelector("#startBtn");
var nextBtn1 = document.querySelector("#nextBtn1");
var nextBtn2 = document.querySelector("#nextBtn2");
var nextBtn3 = document.querySelector("#nextBtn3");
var q1Container = document.querySelector("#q1-container");
var q2Container = document.querySelector("#q2-container");
var q3Container = document.querySelector("#q3-container");
var finalContainer = document.querySelector("#final-container");
var highScoresContainer = document.querySelector("#high-scores");
var resultElement = document.querySelector("#result");
var inputForm = document.querySelector("#input-form");
var restartQuizBtn = document.querySelector("#restartQuizBtn");
var refreshScoresBtn = document.querySelector("#refreshScoresBtn")  

refreshScoresBtn.classList.add("hide");
restartQuizBtn.classList.add("hide");

var questions = [
    {
      question: "What function prints content to the console log in JavaScript?",
      choices: ["console.log()", "print()", "log.console()", "write.console()"],
      correctAnswer: "console.log()",
    },
    {
      question: "How can you comment a single line in JavaScript?",
      choices: [
        "** Comment **",
        "/* Comment */",
        "(!-- Comment --!)",
        "// Comment",
      ],
      correctAnswer: "// Comment",
    },
    {
      question:
        "Which of the following is not a primitive data type in JavaScript?",
      choices: ["Number", "String", "Object", "Boolean"],
      correctAnswer: "Object",
    },
  ];

//Quiz variables when before clickign the start button
var currentQuestionIndex = 0;
var timeLeft = 45;
var correctCount = 0;
var incorrectCount = 0;

//Added Event listeners based on the html buttons
startBtn.addEventListener("click", startQuiz);
nextBtn1.addEventListener("click", moveToNextQuestion);
nextBtn2.addEventListener("click", moveToNextQuestion);
nextBtn3.addEventListener("click", showFinalContainer);
inputForm.addEventListener("submit", handleFormSubmit);
restartQuizBtn.addEventListener("click", resetQuiz);
refreshScoresBtn.addEventListener("click", refreshScores);

// Start container functions
function startQuiz() {
    startContainer.classList.add("hide");
    q1Container.classList.remove("hide");
    showQuestion();
    startTimer();
  }
  
  function startTimer() {
    timerInterval = setInterval(updateTimer, 1000);
  }
  //Added function to show the next questions and choices once the series of next buttons are clicked
  function showQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    var currentQuestionContainer = document.querySelector(`#q${currentQuestionIndex + 1}-container`);
    var currentChoicesContainer = document.querySelector(`#q${currentQuestionIndex + 1}-container .btn-group`);
  
    hideAllContainers();
    currentQuestionContainer.classList.remove("hide");
  
    var choiceButtons = currentChoicesContainer.querySelectorAll("button");
    for (var i = 0; i < choiceButtons.length; i++) {
      choiceButtons[i].textContent = currentQuestion.choices[i];
      choiceButtons[i].addEventListener("click", handleChoiceClick);
    }
  }