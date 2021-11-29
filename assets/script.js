//hides html we dont need at start
document.getElementById("Questions").style.display="none";
document.getElementById("finished").style.display="none";
document.getElementById("highscore").style.display="none";

//variables
const StartButtonEl = document.querySelector("#start");
const introEl = document.querySelector("#intro");
const QuestionsEl = document.querySelector("#Questions");
const TheQuestionEl = document.querySelector("#Question");
const a = document.querySelector("#a");
const b = document.querySelector("#b");
const c = document.querySelector("#c");
const d = document.querySelector("#d");
//Questions 
let Quizquestions = [
    {
        // question 0
        question: "Commonly used data types do NOT include:",
        answers: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        correctAnswer: "2"
    },
    {
        // question 1
        question: "The condition in an if / else statement is enclosed within ____.",
        answers: ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"],
        correctAnswer: "1"
    },
    {
        // question 2
        question: "Arrays in Javascript can be used to store ____.",
        answers: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        correctAnswer: "3"
    },
    {
        // question 3
        question: "String values must be enclosed within ____ when being assigned to variables.",
        answers: ["1. commmas", "2. curly brackets", "3. quotes", "4. parentheses"],
        correctAnswer: "2"
    },
    {
        // question 4
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: ["1. Javascript", "2. terminal/bash", "3. for loops", "4. console.log"],
        correctAnswer: "3"
    }
];


// functions
// Function for cycling through questions
const lastQ = Quizquestions.length -1;
let firstQ = 0;

 function ShowQuestions() {
     let quiz = Quizquestions[firstQ];
     Question.innerHtml = "quiz.question";
     
 }
//start quiz
var startPage = StartButtonEl.addEventListener("click", function(){
    introEl.style.display = "none";
    QuestionsEl.style.display = "block";
    ShowQuestions()
        
})
