var countdown = 60 
var countdownEl = document.getElementById ("countdown")
var start = document.getElementById ("start-quiz")
var index = 0
var title = document.getElementById ("title") 
var quizEl = document.getElementById ("quiz")


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
        choices :  ["The parents weren't fond of his sweater", "Freddy was possesed", "Freddy killed their children", "It was by an accidental fire"],
        answer : "Freddy killed their children"
    }
];

function timer (){
    setInterval(function(){ 
        console.log("yes")
        if (countdown < 0) {}
        countdown--
        countdownEl.textContent = countdown;
    }, 1000);
    
}

//Start timer count down when the start button is selected. 
function startQuiz (){
     timer();
     getQuestion ();
}
//Quiz Questions
function getQuestion () {
   var question1 = questions [index];
//    console.log(question1) 
   title.textContent = question1.question;
   for (let i = 0; i < question1.choices.length; i++) {
       const element = question1.choices[i];
    //    console.log(element)
       var choicesBtn = document.createElement ("button");
       choicesBtn.textContent= element;
       quizEl.append(choicesBtn);
       choicesBtn.addEventListener ("click", handleResponse)


   }
}
function handleResponse (){
    index++
    var buttonAll = document.querySelectorAll ("button");
    
    for (let i = 0; i < buttonAll.length; i++) {
    buttonAll[i].remove();

    }
    getQuestion ();


}

start.addEventListener ("click", startQuiz)


