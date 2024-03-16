/*
JAVASCRIPT ASSESSEMENT

Create the HTML structure
A <div> to hold the quiz
A <button> to submit the quiz
A <div> to display the results

Get each element and store each in a variable
Create an event listener for when your user has clicked on the button
Create an array of objects with your questions, options for the answer and the actual answer

-----------
Create a buildQuiz function
loop through the array of questions to display the questions and options for the answer

Create a showResults function
keep tracK of how many answers the user has correct 
check if what they selected is correct 
change the styling if the answer right or wrong

Put the whole thing!

*/ 


const quizContainer = document.querySelector('#quiz');
const submitButton = document.querySelector('#submit');
const storeResults = document.querySelector('#results');

const questions = [
{
  question: "What is the highest mountain in the world?",
  options: ["Mount Everest", "Mount Kangchenjunga", "Mount Makalu", "Mount Nanga Parbat"],
  answer: "Mount Everest"
},
{
  question: "What is the longest river in the world?",
  options: ["Amazon River", "Mississippi River", "River Nile", "Yangtze River"],
  answer: "River Nile"
},
 {
  question: "What is the name of smallest country in the world?",
  options: ["Tuvalu", "Monaco", "Nauru", "Vatican City"],
  answer: "Vatican City"
}
]

function buildQuiz () {
   for(let index = 0; index<questions.length; index++) {
   const divQuestions = document.createElement('div');
   divQuestions.classList.add('question');// <div class = question>....</div>

   divQuestions.innerHTML= `<h1>Question ${index+1}: ${questions[index].question}</h1>`

   for(let optionPosition= 0; optionPosition<questions[index].options.length; optionPosition++) {

      const option = questions[index].options[optionPosition];
      const label = document.createElement('label');
      label.innerHTML = `<input type="radio" name = "question${index}" value="${option}"> ${option}`;

      divQuestions.appendChild(label);

   }
   quizContainer.appendChild(divQuestions);


   }
  
}

buildQuiz();

function showResults() {
  const answerContainers = quizContainer.querySelectorAll('.question');
let score = 0;

for(let i = 0; i<questions.length; i++) {
  const answerContainer = answerContainers[i];
  const selector = `input[name=question${i}]:checked`;
  const userAnswer = (answerContainer.querySelector(selector)|| {}).value;
  answerContainer.classList.remove('results-correct', 'results-incorrect');

  if(userAnswer === questions[i].answer) {
    answerContainer.classList.add('results-correct'); // class = 'results-correct'
   score = score +1;
   //score ++;
  } else {
    answerContainer.classList.add('results-incorrect');// class = 'results-incorrect'
  }
}
storeResults.innerHTML = `you have ${score} out of ${questions.length}`;

}

submitButton.addEventListener('click',showResults);



// class Person {
//  constructor(name, age) {
//     this.name = name;
//     this.age = age;
//  }
// }

// const personOne = new Person("John", 30);

// const personTwo = new Person('Ouakhila', 29);

// console.log(`Persone one name: ${personOne.name}`);
// console.log(`Persone one name: ${personOne.age}`);
// console.log(`Persone two name: ${personTwo.name}`);
// console.log(`Persone one name: ${personTwo.age}`);








