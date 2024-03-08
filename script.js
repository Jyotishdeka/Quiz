const container = document.querySelector(".container");
const questionBox = document.querySelector(".question");
const choicesBox = document.querySelector(".choices");
const nextBtn = document.querySelector(".nextBtn");
const scoreCard = document.querySelector(".scoreCard");

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
}
//function to check answer

const checkAnswer = () =>{
    const selectedChoice = document.querySelector('.choice.selected');
    if(selectedChoice.textContent === quiz[currentQuestionIndex].answer){
        alert("Correct Answer")
        score++;
    }
    else{
        alert("Wrong Answer !")
    }

    currentQuestionIndex++;
    if(currentQuestionIndex < quiz.length){
        showQuestions();
     }
     else{
        showScore();
     }
}

// function to show score
const showScore = () => {
    questionBox.textContent= "";
    choicesBox.textContent = "";
    scoreCard.textContent = `You scored ${score} out of ${quiz.length} cutie`;
    nextBtn.textContent = "Play Again"
    nextBtn.addEventListener('click', () => {
          currentQuestionIndex = 0;
          showQuestions();
          nextBtn.textContent ="Next";
          scoreCard.textContent = "";

    });
}

showQuestions();
nextBtn.addEventListener('click', ()=>{
    const selectedChoice = document.querySelector('.choice.selected');
    if(!selectedChoice  && nextBtn.textContent === "Next"){
        alert("Select your Answer")
        return;
    }
    else{
         checkAnswer();
    }
   
    
})