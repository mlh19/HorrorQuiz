// Elements
var countdownEl = document.getElementById("countdown")
var startButton = document.getElementById("startButton")
var title = document.getElementById ("title") 
var quizEl = document.getElementById ("quiz")

// Quiz Variables
var currentQuestionIndex = 0
var countdown = 60 
// It will increment by 20 for each question right.
var score = 0

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
        choices :  ["The parents weren't fond of his sweater", "Freddy was possesed by the devil", "Freddy killed their children", "It was by an accidental fire"],
        answer : "Freddy killed their children"
    }
];

function timer() {
    countdownEl.textContent = countdown;

    setInterval(function() { 
        console.log("yes")
        if (countdown > 0) {
            countdown--;
        }
        countdownEl.textContent = countdown;
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
    // Give each choice button names button1, button2, etc. so we can know 
    // later which one the user selected.
       var choiceButton = document.createElement("button");
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
        // score = score + 20;
        score += 20;
        console.log("You got the question right. Your current score is " + score);
    } else {
        console.log("You got the question wrong.");
        countdown -= 5;
        // Update the UI immediately instead of waiting for the next timer cycle.
        countdownEl.textContent = countdown;
    }

    var buttonAll = document.querySelectorAll("button");
    for (let i = 0; i < buttonAll.length; i++) {
        buttonAll[i].remove();
    }

    // Increment the question index to get the next question when it will reload the quiz.
    currentQuestionIndex++;
    getQuestion();
}

// Conect the start button to the startQuiz function.
startButton.addEventListener("click", startQuiz)


