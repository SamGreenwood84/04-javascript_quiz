# 04-javascript_quiz
Web APIs Challenge: Code Quiz

**User Story**

The USER wants to challenge their knowledge of Javascript by taking a short quiz and keeping track of scores to compare with peers

**Acceptance Criteria**

THE USER is presented with a start container describing the quiz and rules

![Alt text](assets/images/startcontainer-javascriptquiz.png)

WHEN the USER clicks  !["Start" button](assets/images/start-button.png)

THEN the timer begins at 45 seconds and USER is presented with the first question

![Alt text](assets/images/question1-javascriptquiz.png)

IF the USER chooses right a message displays **"Correct!"**

IF the USER chooses wrong a message displays **"Incorrect"** and 15 seconds is deducted from the timer 

WHEN the USER clicks ![the "Next" button](assets/images/next-button.png) the USER is presented with the next question

![!\[Alt text\](assets/images/question1-javascriptquiz.png)](assets/images/question2-javascriptquiz.png)

IF the user fails to click next within 5 seconds the USER will automatically be presented with the next question

![Alt text](assets/images/question3-javascriptquiz.png)

IF the timer runs out a message will display "You Lose! Times up!" and the game is over and you are prompted to submit your initials to log score 0

![Alt text](image.png)

WHEN all the questions are answered the quiz is over

THEN the USER is prompted to enter maximum 3 initials

WHEN the USER clicks ![the "Submit" button](assets/images/submit-button.png) the USER initials and Score that equals the time left will be logged

THEN the **Top 10 scores** will be displayed

AND the USER will also be presented with !["Refresh Scores" button](assets/images/refresh-button.png) to clear the high scores

IF the USER clicks !["Refresh Scores"](assets/images/refresh-button.png) the High Scores will reset

WHEN the High Scores container appears the USER will also be presented with !["Try Again" button](assets/images/tryagain-button.png) to restart the Quiz

IF the USER clicks !["Try Again"](assets/images/tryagain-button.png) the start container will appear again and hide the high scores container and two buttons

WHEN the quiz restarts and the USER clicks the !["Start"](assets/images/start-button.png) button again the timer will start back at 45 seconds

**References**

References made to our school lessons **Module 4** and help with the Javascript structure by Tutor **David Elutilo**

Build A Quiz App With JavaScript-Reference-[Web Dev Simplified-Youtube Video](https://www.youtube.com/watch?v=riDzcEQbX6k)
 
 clear alert function reference-
[stackoverflow.com](https://stackoverflow.com/questions/34341462/element-declared-as-variable-vs-get-element?rq=3)
![Alt text](<assets/images/timout alert reference-stackoverflow.png>)

highscore to local storage reference-
[stackoverflow.com](https://stackoverflow.com/questions/29370017/adding-a-high-score-to-local-storage)

![Alt text](<assets/images/highscore to local storage reference-stackoverflow.png>)

input form reference-
[w3schools.com](https://www.w3schools.com/html/tryit.asp?filename=tryhtml_form_submit)

![Alt text](<assets/images/input form reference-w3schools.png>)

preventing default behaviour reference-
[wesbos.com](https://wesbos.com/javascript/05-events/prevent-default-and-form-events)
![Alt text](<assets/images/preventing default behaviour reference-wesbos.png>)