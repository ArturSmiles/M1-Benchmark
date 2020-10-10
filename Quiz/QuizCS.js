//Functions
function loadGame(){
    const output=[]

    myQuestions.forEach(
        (currentQuestion, questionNumber) =>{
            const answers= []
            for(letter in currentQuestion.answers){
                answers.push(
                    `<label>
                        <input type="radio" name="question${questionNumber}" value="${letter}">
                        ${letter} :
                        ${currentQuestion.answers[letter]}
                    </label>`
                )
            }
            output.push(
                `<div class="slide">
                <h2>${currentQuestion.category}</h2>
                <div class="question">${currentQuestion.question}</div>
                <div class="answers">${answers.join("")}</div>
                </div>`
            )
        }
    )
    quizC.innerHTML = output.join("")
}
function showResults(){
    const answerC = quizC.querySelectorAll('.answers');
    let numRight = 0;
    myQuestions.forEach( (currentQuestion, questionNumber) => {

      const answerContainer = answerC[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      if(userAnswer === currentQuestion.correctAnswer){
        
        numRight++;
  
        
        answerC[questionNumber].style.color = 'lightgreen';
      }
      
      else{
        
        answerC[questionNumber].style.color = 'red';
      }
    });

    resultC.innerHTML = `${numRight} out of ${myQuestions.length}`;
    if(numRight >= 6){
        alert("YOU WIN! \n"+ "Total Score of: " + numRight)
        document.getElementById("again").style.display = 'inline-block';
        submitBtn.style.display = 'none';
        previousButton.style.display = 'none'
    }else{
        alert("YOU LOSE \n" + "Total Score of: " + numRight)
        document.getElementById("again").style.display = 'inline-block';
        submitBtn.style.display = 'none';
        previousButton.style.display = 'none'
    }
}
function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide === 0){
      previousButton.style.display = 'none';
    }
    else{
      previousButton.style.display = 'inline-block';
    }
    if(currentSlide === slides.length-1){
      nextButton.style.display = 'none';
      submitBtn.style.display = 'inline-block';
      document.getElementById("new").style.display = 'inline-block';
    }
    else{
      nextButton.style.display = 'inline-block';
      submitBtn.style.display = 'none';
      document.getElementById("new").style.display = 'none';
      document.getElementById("again").style.display = 'none';
    }
}
function showNextSlide() {
    showSlide(currentSlide + 1);
}
function showPreviousSlide() {
    showSlide(currentSlide - 1);
}

//Variables
const quizC = document.getElementById("quiz")
const resultC = document.getElementById('results');
const submitBtn = document.getElementById('submit');
const myQuestions = [
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "What does CPU stand for?",
      answers:{
        A: "Central Processing Unit",
        B: "Central Process Unit",
        C: "Computer Personal Unit",
        D: "Central Processor Unit"
    },
    correctAnswer: "A"
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
      answers:{
        A: "Public",
        B: "Private",
        C: "Static",
        D: "Final"
    },
    correctAnswer: "D"
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "The logo for Snapchat is a Bell.",
      correct_answer: "False",
      incorrect_answers: ["True"],
      answers:{
          A:"True",
          B:"False"
      },
      correctAnswer:"B"
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question:
        "Pointers were not used in the original C programming language; they were added later on in C++.",
      answers:{
          A:"True",
          B:"False"
      },
      correctAnswer:"B"
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the most preferred image format used for logos in the Wikimedia database?",
      answers:{
        A: ".svg",
        B: ".png",
        C: ".jpeg",
        D: ".gif"
    },
    correctAnswer: "A"
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "In web design, what does CSS stand for?",
      answers:{
        A: "Computer Style Sheet",
        B: "Counter Strike: Source",
        C: "Cascading Style Sheet",
        D: "Computer Style Sheet"
    },
    correctAnswer: "C"
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the code name for the mobile operating system Android 7.0?",
      answers:{
        A: "Ice Cream Sandwich",
        B: "Jelly Bean",
        C: "Nougat",
        D: "Marshmallow"
    },
    correctAnswer: "C"
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "On Twitter, what is the character limit for a Tweet?",
      answers:{
          A: "120",
          B: "100",
          C: "160",
          D: "140"
      },
      correctAnswer: "D"
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "Linux was first created as an alternative to Windows XP.",
      answers:{
          A: "True",
          B: "False"
      },
      correctAnswer: "B"
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "Which programming language shares its name with an island in Indonesia?",
    answers:{
        A: "Python",
        B: "Java",
        C: "C",
        D: "Jakarta"
    },
    correctAnswer: "B"
    }
  ];
//Start
loadGame()

//Pages
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

//First Slide
showSlide(currentSlide)

//Event Listeners
submitBtn.addEventListener("click", showResults)
previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);