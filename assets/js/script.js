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