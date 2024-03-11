const container = document.querySelector(".container");
const questionBox = document.querySelector(".question");
const choicesBox = document.querySelector(".choices");
const nextBtn = document.querySelector(".nextBtn");
const scoreCard = document.querySelector(".scoreCard");
const alert = document.querySelector(".alert");
const startBtn = document.querySelector(".btnStart");
const timer = document.querySelector(".timer")

// make an array of objects thats stores question choices of answers
const quiz = [
   {
    question:"Q. Which of the following is not a CSS box model property ?",
    choices: ["margin", "padding", "border-radius", "border-collapse"],
    answer: "border-collapse"
   },
   {
    question: "Q. What does CSS stand for?",
    choices: ["Cascading Style Sheets", "Creative Style System", "Computer Style Script", "Coded Style Structure"],
    answer: "Cascading Style Sheets"
},
{
    question: "Q. Which property is used to change the background color of an element?",
    choices: ["color", "background-color", "bgcolor", "background"],
    answer: "background-color"
},
{
    question: "Q. Which of the following values cannot be assigned to the 'position' property in CSS?",
    choices: ["relative", "fixed", "center", "absolute"],
    answer: "center"
},
{
    question: "Q. Which CSS property controls the text size?",
    choices: ["text-size", "font-size", "text-style", "font-style"],
    answer: "font-size"
}

];

let currentQuestionIndex = 0;
let score = 0;
let quizOver = false;
let timeLeft = 15;
let timerID = null;

const showQuestions = ()=>{
    const questionDetails = quiz[currentQuestionIndex];
    questionBox.textContent = questionDetails.question;
      

    choicesBox.textContent= "";
    for(let i=0; i<questionDetails.choices.length; i++){
        const currentChoice = questionDetails.choices[i];
        const choiceDiv =document.createElement('div');
        choiceDiv.textContent = currentChoice;
        choiceDiv.classList.add('choice');
        choicesBox.appendChild(choiceDiv);


       choiceDiv.addEventListener('click', ()=>{
        if(choiceDiv.classList.contains('selected')){
            choiceDiv.classList.remove('selected');
        }
        else{
            choiceDiv.classList.add('selected')
        }
       })
    }
    if(currentQuestionIndex <quiz.length){
        startTimer();
    }
}
//function to check answer

const checkAnswer = () =>{
    const selectedChoice = document.querySelector('.choice.selected');
    if(selectedChoice.textContent === quiz[currentQuestionIndex].answer){
        displayAlert("Correct Answer cutie")
        score++;
    }
    else{
       displayAlert(`Wrong Answer ! ${quiz[currentQuestionIndex].answer} is the Correct Answer`);
    }

    timeLeft = 15 ;
    currentQuestionIndex++;
    if(currentQuestionIndex < quiz.length){
        showQuestions();
     }
     else{
        showScore();
        stopTime();
        
     }
}

// function to show score
const showScore = () => {
    questionBox.textContent= "";
    choicesBox.textContent = "";
    scoreCard.textContent = `You scored ${score} out of ${quiz.length} cutie`;
    displayAlert("You have completed the Quiz.. ")
    nextBtn.textContent = "Play Again"
    quizOver = true;
    timer.style.display = "none";
}
// function to show alert
const displayAlert = (msg) => {
    alert.style.display = "block";
    alert.textContent = msg;
    setTimeout(() => {
        alert.style.display = "none";
    }, 3000);  
} 
//adding event listener to start button
startBtn.addEventListener('click', () => {
    startBtn.style.display = "none";
    container.style.display = "block"
    startQuiz();
   
})

//function to start timer
const startTimer = () =>{
    clearInterval(timerID);
    timer.textContent = timeLeft; //check if any existing timer
    const countDown =() =>{
        timeLeft--;
        timer.textContent = timeLeft;  
        if(timeLeft === 0){
          const confirmUser = confirm("Time Up!! Do You want to play the quiz again");
          if(confirmUser){
            timeLeft = 15;
            startQuiz();
          }
          else{
            startBtn.style.display = "block"
            container.style.display = "none";
            return;
          }
        } 
    }
  timerID = setInterval(countDown, 1000); 
}

//function to stop time
const stopTime = () =>{
  clearInterval(timerID);
}

//function to start quiz
const startQuiz = () =>{
    timeLeft = 15;
    timer.style.display ="flex";
    shuffleQuestions();
}

//function to shuffle questions
const shuffleQuestions = () =>{
    for(let i=quiz.length-1; i>0; i--){
        const j = Math.floor(Math.random() *(i+1));
        [quiz[i], quiz[j]] = [quiz[j], quiz[i]];
    }
    currentQuestionIndex = 0;
    showQuestions();
}


nextBtn.addEventListener('click', ()=>{
    const selectedChoice = document.querySelector('.choice.selected');
    if(!selectedChoice  && nextBtn.textContent === "Next"){
        displayAlert("Select Your Answer babe take it easy !!")
        return;
    }
    if(quizOver){
       
             nextBtn.textContent ="Next";
             scoreCard.textContent = "";
             currentQuestionIndex = 0;
             startQuiz();
             quizOver = false;
             score = 0;
    }
    else{
         checkAnswer();
    }
   
    
})