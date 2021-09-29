// Elements
var countdownEl = document.getElementById("countdown")
var startButton = document.getElementById("startButton")
var title = document.getElementById ("title") 
var quizEl = document.getElementById ("quiz")
var saveInitialsButton = document.getElementById("saveInitialsButton");

// Quiz Variables
var currentQuestionIndex = 0;
var countdown = 60;
// It will increment by 1 for each question right.
var score = 0;
var finalGrade = 0;

// array of questions, choices, and answers
var questions = [
    {
        question : "In which year did the original movie, Physco by Alfred Hitchcock debuet?",
        choices : ["1960", "1964", "1984", "1980"],
        answer : "1960"
    },
    {
        question : "Which of these movies features Ed & Lorraine Warren",
        choices : ["Drag me to Hell", "Insidous", "The Conjuring", "Paranormal Activity"],
        answer : "The Conjuring"   
    },
    {
        question : "What movie is the following quote from? 'This is no dream! This is really happening'",
        choices : ["Scream", "Nightmare on Elm Street", "Silence of the Lambs", "Rosemary's Baby"],
        answer : "Rosemary's Baby"
    }, 
    {
        question : "How many days did it take to create the Blair Witch Project?",
        choices : ["7 days", "8 days", "20 days", "22 days"],
        answer : "8 days"
    },
    {
        question : "Why did the parents kill the human Freddy Krueger?",
        choices :  ["They weren't fond of his sweater", "Freddy was possesed", "Freddy killed their children", "It was by an accidental fire"],
        answer : "Freddy killed their children"
    }
];

function timer() {
    countdownEl.textContent = countdown;

    setInterval(function() { 
        if (countdown > 0) {
            countdown--;
            countdownEl.textContent = countdown;
            if (countdown == 0) {
                quizCompleted();
            }
        }
    }, 1000);
}

//Start timer count down when the start button is selected. 
function startQuiz() {
    startButton.remove();
     timer();
     getQuestion();
}

//Quiz Questions
function getQuestion() {
    // Get the current question based on the index which determines what question the user is on.
   var question = questions[currentQuestionIndex];
   console.log("The answer is " + question.answer);
   title.textContent = question.question;

   // Loops the current question's choices to create a button with their titles as
   // each question choice.
   for (let i = 0; i < question.choices.length; i++) {
       const questionChoice = question.choices[i];
    // later which one the user selected.
       var choiceButton = document.createElement("button");
       choiceButton.id = "choiceButton" + (i + 1);
       choiceButton.textContent = questionChoice;
       // Add each choice button to the quizEl div.
       quizEl.append(choiceButton);
       // When a choices button is clicked, it will call the choiceButtonClicked function.
       choiceButton.addEventListener("click", choiceButtonClicked)
   }
}

// Each answer choice button calls this function.
function choiceButtonClicked() {
    // this refers to the current object that called this function.

    // Check if the text of the button clicked matches the current question's answer.
    if (this.textContent == questions[currentQuestionIndex].answer) {
        score += 1;
        console.log("You got the question right. Your current score is " + score);
    } else {
        console.log("You got the question wrong.");
        countdown -= 5;
        // Update the UI immediately instead of waiting for the next timer cycle.
        countdownEl.textContent = countdown;
    }

    // Remove all of the 4 choice buttons to re-add in the next getQuestion call.
    removeAllChoiceButtons();

    // Increment the question index to get the next question when it will reload the quiz.
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        getQuestion();
    } else {
        quizCompleted();
    }
}

function removeAllChoiceButtons() {
    var choiceButtons = document.querySelectorAll("button");
    for (let i = 0; i < choiceButtons.length; i++) {
        if (choiceButtons[i].id != "saveInitialsButton") {
            choiceButtons[i].remove();
        }
    }
}

// This function means that the quiz has been completed.
function quizCompleted() {
    countdown = 0;
    finalGrade = (score / questions.length) * 100;
    countdownEl.textContent = finalGrade + "%";
    title.textContent = "You answered " + score + " out of " + questions.length +  " questions correctly!";
    removeAllChoiceButtons();

    // Unhide the div section that has the save the initials.
    document.getElementById("saveScoreDiv").setAttribute("style", "display: block");
}

function saveInitialsButtonPressed() {
    var initials = document.getElementById("initialsInputBox").value;
    console.log("Saving score " + finalGrade + " for " + initials);
    // Store the final grade to the initials key. key: value
    localStorage.setItem(initials, finalGrade);
    document.getElementById("saveScoreDiv").setAttribute("style", "display: none");
    displayHighScores();
}

function displayHighScores() {
    const highScoresDiv = document.getElementById("highScoresDiv");
    highScoresDiv.setAttribute("style", "display: block");

    // Get all of the keys for the local storage (which are just all the initials).
    var keys = Object.keys(localStorage);
    // The index to reference each key by.
    var i = keys.length;
    // Create a new element with each initial and their score.
    while (i--) {
        // Create an h3 tag.
        const highScoreHeader = document.createElement("h3");
        // Store the initials and score for the h3 title.
        // The getItem is giving me the score for the current key (initials).
        highScoreHeader.textContent = keys[i] + " - " + localStorage.getItem(keys[i]);
        // Add that h3 tag to the div to display it.
        highScoresDiv.append(highScoreHeader);
    }
}

// function clearHighScores() {
//     var keys = Object.keys(localStorage);
//     var i = keys.length;
//     while (i--) {
//         localStorage.removeItem(keys[i]);
//     }
//     displayHighScores();
// }

// Conect the start button to the startQuiz function.
startButton.addEventListener("click", startQuiz);
saveInitialsButton.addEventListener("click", saveInitialsButtonPressed);