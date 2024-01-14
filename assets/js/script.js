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
  //Function to show the next questions and choices once the series of next buttons are clicked
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
  //Function to move through the questions once the answers are chosen and the series of next buttons are clicked
  function moveToNextQuestion() {
    hideAllContainers();
  
    if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex++;
      showQuestion();
    } else {
      endQuiz();
    }
  }
//Function to check the answers
  function handleChoiceClick(event) {
    checkAnswer(event.target.textContent);
  }
  function checkAnswer(userChoice) {
    var currentQuestion = questions[currentQuestionIndex];
  
    if (userChoice === currentQuestion.correctAnswer) {
      correctCount++;
      showAlert("Correct!", function () {});
      console.log("Correct!", correctCount);
    } else {
      incorrectCount++;
      // Deduct 15 seconds for incorrect answers
      timeLeft -= 15;
      if (timeLeft < 0) {
        timeLeft = 0;
      }
      showAlert("Incorrect!", function () {
        setTimeout(function () {
          if (correctCount + incorrectCount === 3) {
            clearCounts();
          }
        }, 7000);
        console.log("Incorrect!", incorrectCount);
      });
    }
  }

  //Function to show the final container once all three questions are answered
  function showFinalContainer() {
    hideAllContainers();
    finalContainer.classList.remove("hide");
    clearInterval(timerInterval);
  }
  //Function to update timer and log timeLeft as the score
  function updateTimer() {
    if (timeLeft <= 0) {
      endQuiz();
    } else {
      timerElement.textContent = timeLeft;
      timeLeft--;
    }
  }
  //Function to hide the containers once the high scores container appear
  function hideAllContainers() {
    var allContainers = [q1Container, q2Container, q3Container, finalContainer];
    allContainers.forEach((container) => container.classList.add("hide"));
  }
  //Function to input initials and high score to local storage
  function handleFormSubmit(event) {
    event.preventDefault();
  
    var initialsInput = document.querySelector("#initials");
    var userInitials = initialsInput.value;
  
    var userScore = timeLeft;
    var userData = { initials: userInitials, score: userScore };
    var userScores = JSON.parse(localStorage.getItem("highScores")) || [];
    userScores.push(userData);
    localStorage.setItem("highScores", JSON.stringify(userScores));
  
    console.log("User Initials:", userInitials);
    console.log("Score:", timeLeft);
  
    resultElement.textContent = `You answered ${correctCount} out of ${questions.length} correctly!`;
    displayHighScores();
    highScoresContainer.classList.remove("hide");
  }
//Function to reset the quiz once "Try again" is clicked
  function resetQuiz() {
    hideAllContainers();
    startContainer.classList.remove("hide");
    resultElement.textContent = "";
    clearCounts();
  
//Clear all alert elements from the DOM
    var existingAlerts = document.querySelectorAll("div.alert");
    existingAlerts.forEach(function (alert) {
      alert.remove();
    });
  
    currentQuestionIndex = 0;
    timeLeft = 45;
  }
  //Function to clear the correct and incorrect counts once the "Try again" button is clicked
  function clearCounts() {
    correctCount = 0;
    incorrectCount = 0;
  }
 //Function to refresh the scores from local storage once the "Refresh Scores" button is clicked 
  function refreshScores() {
    localStorage.removeItem("highScores");
    displayHighScores();
    refreshScoresBtn.classList.add("hide");
  }
  