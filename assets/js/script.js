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
        choices :  ["The parents weren't fond of his sweater", "Freddy was possesed", "Freddy killed their children", "The parents didn't like Freddy living on their street"],
        answer : "Freddy killed their children"
    }
];

var timer = new Timer();
timer.start();

timer.addEventListener('secondsUpdated', function (e) {
    $('#basicUsage').html(timer.getTimeValues().toString());
});






// Update the count down every 1 second
// var x = setInterval(function() {
    
// // Time calculations for minutes and seconds
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
//   // Output the result in an element with id="demo"
//   document.getElementById("demo").innerHTML = days + "d " + hours + "h "
//   + minutes + "m " + seconds + "s ";
    
//   // If the count down is over, write some text 
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("demo").innerHTML = "EXPIRED";
//   }
// }, 1000);
