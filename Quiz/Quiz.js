//Functions
function buildQuiz(){
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
                <div class="question">${currentQuestion.question}</div>
                <div class="answers">${answers.join("")}</div>
                </div>`
            )
        }
    )
    quizContainer.innerHTML = output.join("")
}
function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');
  
    // keep track of user's answers
    let numCorrect = 0;
  
    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {
  
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
      // if answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;
  
        // color the answers green
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }
    });
  
    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    if(numCorrect >= 6){
        alert("YOU WIN!")
    }else{
        alert("YOU LOSE")
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
      submitButton.style.display = 'inline-block';
    }
    else{
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }
}
function showNextSlide() {
    showSlide(currentSlide + 1);
}
function showPreviousSlide() {
    showSlide(currentSlide - 1);
}

  

//Variables
const quizContainer = document.getElementById("quiz")
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const myQuestions = [
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "What does CPU stand for?",
      answers:{
        a: "Central Processing Unit",
        b: "Central Process Unit",
        c: "Computer Personal Unit",
        d: "Central Processor Unit"
    },
    correctAnswer: "a"
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
      answers:{
        a: "Public",
        b: "Private",
        c: "Static",
        d: "Final"
    },
    correctAnswer: "d"
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "The logo for Snapchat is a Bell.",
      correct_answer: "False",
      incorrect_answers: ["True"],
      answers:{
          a:"True",
          b:"False"
      },
      correctAnswer:"b"
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question:
        "Pointers were not used in the original C programming language; they were added later on in C++.",
      answers:{
          a:"True",
          b:"False"
      },
      correctAnswer:"b"
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the most preferred image format used for logos in the Wikimedia database?",
      answers:{
        a: ".svg",
        b: ".png",
        c: ".jpeg",
        d: ".gif"
    },
    correctAnswer: "a"
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "In web design, what does CSS stand for?",
      answers:{
        a: "Computer Style Sheet",
        b: "Counter Strike: Source",
        c: "Cascading Style Sheet",
        d: "Computer Style Sheet"
    },
    correctAnswer: "c"
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the code name for the mobile operating system Android 7.0?",
      answers:{
        a: "Ice Cream Sandwich",
        b: "Jelly Bean",
        c: "Nougat",
        d: "Marshmallow"
    },
    correctAnswer: "c"
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "On Twitter, what is the character limit for a Tweet?",
      answers:{
          a: "120",
          b: "100",
          c: "160",
          d: "140"
      },
      correctAnswer: "d"
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "Linux was first created as an alternative to Windows XP.",
      answers:{
          a: "True",
          b: "False"
      },
      correctAnswer: "b"
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "Which programming language shares its name with an island in Indonesia?",
    answers:{
        a: "Python",
        b: "Java",
        c: "C",
        d: "Jakarta"
    },
    correctAnswer: "b"
    }
  ];
//Start
buildQuiz()

//Pagening
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

//First Slide
showSlide(currentSlide)

//Event Listeners
submitButton.addEventListener("click", showResults)
previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);