// Elements
var countdownEl = document.getElementById ("countdown")
var startButton = document.getElementById("startButton")
var title = document.getElementById ("title") 
var quizEl = document.getElementById ("quiz")

// Quiz Variables
var currentQuestionIndex = 0
var countdown = 60 
// You need a way to track the user's corect questions.


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
    countdownEl.textContent = "60";

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
    // Get the current question based on the index which determines
    // what question the user is on.
   var question = questions[currentQuestionIndex];
//    console.log(question1) 
   title.textContent = question.question;
   for (let i = 0; i < question.choices.length; i++) {
       const element = question.choices[i];
    //    console.log(element)
       var choicesBtn = document.createElement("button");
       choicesBtn.textContent= element;
       quizEl.append(choicesBtn);
       // When a choices btn is clicked, it will call the choiceButtonClicked function.
       choicesBtn.addEventListener("click", choiceButtonClicked)
   }
}

// Each answer choice button calls this function.
function choiceButtonClicked() {
    
    var buttonAll = document.querySelectorAll ("button");
    
    for (let i = 0; i < buttonAll.length; i++) {
    buttonAll[i].remove();

    }

    // Increment the question index to get the next question when it will reload the quiz.
    currentQuestionIndex++;
    getQuestion();
}

// Conect the start button to the startQuiz function.
startButton.addEventListener("click", startQuiz)


