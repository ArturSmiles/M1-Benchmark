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
                <h2>${currentQuestion.category}</h2>
                <div class="question">${currentQuestion.question}</div>
                <div class="answers">${answers.join("")}</div>
                </div>`
            )
        }
    )
    quizContainer.innerHTML = output.join("")
}
function showResults(){
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;
    myQuestions.forEach( (currentQuestion, questionNumber) => {

      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      if(userAnswer === currentQuestion.correctAnswer){
        
        numCorrect++;
  
        
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      
      else{
        
        answerContainers[questionNumber].style.color = 'red';
      }
    });

    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    if(numCorrect >= 6){
        alert("YOU WIN! \n"+ "Total Score of: " + numCorrect)
        document.getElementById("again").style.display = 'inline-block';
        submitButton.style.display = 'none';
    }else{
        alert("YOU LOSE \n" + "Total Score of: " + numCorrect)
        document.getElementById("again").style.display = 'inline-block';
        submitButton.style.display = 'none';
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
      document.getElementById("new").style.display = 'inline-block';
    }
    else{
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
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
const quizContainer = document.getElementById("quiz")
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const myQuestions = [
    {
      category: "General Knowledge",
      question: "How many time zones are there in Russia?",
      answers:{
        A: "12",
        B: "14",
        C: "11",
        D: "10"
    },
    correctAnswer: "C"
    },
    {
      category: "General Knowledge",
      question:
        "What’s the national flower of Japan?",
      answers:{
        A: "Camellia",
        B: "Violet",
        C: "Red Tulip",
        D: "Cherry Blossom"
    },
    correctAnswer: "D"
    },
    {
      category: "General Knowledge",
      question: "How many stripes are there on the US flag?",
      answers:{
          A:"11",
          B:"12",
          C:"13",
          D:"14"
      },
      correctAnswer:"C"
    },
    {
      category: "General Knowledge",
      question:
        "What’s the national animal of Australia?",
      answers:{
          A:"Koala",
          B:"Red Kangaroo",
          C:"Tasmanian Devil",
          D:"Emu"
      },
      correctAnswer:"B"
    },
    {
      category: "General Knowledge",
      question:
        "How many days does it take for the Earth to orbit the Sun?",
      answers:{
        A: "360",
        B: "370",
        C: "365",
        D: "364"
    },
    correctAnswer: "C"
    },
    {
      category: "General Knowledge",
      question: "Which of the following empires had no written language",
      answers:{
        A: "Incan",
        B: "Aztec",
        C: "Egyptian",
        D: "Roman"
    },
    correctAnswer: "A"
    },
    {
      category: "General Knowledge",
      question:
        "Until 1923, what was the Turkish city of Istanbul called?",
      answers:{
        A: "Kalamaki",
        B: "Neopolis",
        C: "Sinasos",
        D: "Constantinople"
    },
    correctAnswer: "D"
    },
    {
      category: "General Knowledge",
      question: "What is the smallest country in the world?",
      answers:{
          A: "Vatican City",
          B: "Monaco",
          C: "Nauru",
          D: "San Marino"
      },
      correctAnswer: "A"
    },
    {
      category: "General Knowledge",
      question: "Which is the only vowel not used as the first letter in a US State?",
      answers:{
          A: "A",
          B: "E",
          C: "I",
          D: "O"
      },
      correctAnswer: "B"
    },
    {
      category: "General Knowledge",
      question:
        "Alberta is a province of which country?",
    answers:{
        A: "South Africa",
        B: "Canada",
        C: "Netherlands",
        D: "Chile"
    },
    correctAnswer: "B"
    }
  ];
//Start
buildQuiz()

//Pages
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