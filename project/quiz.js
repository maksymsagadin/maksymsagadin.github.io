const questions = (data);

let introContainer = document.getElementById('quiz-intro');
let questionContainer = document.getElementById('question-container');
let question = document.getElementById('question');
let beginButton = document.getElementById('begin');
let nextButton = document.getElementById('next');
let backButton = document.getElementById('back');
let resetButton = document.getElementById('reset');
let currentQuestionIndex = 0;
let answers = [];


function renderQuestion(currentQuestionIndex) {
  questionContainer.classList.remove('hidden');
  question.innerHTML = `
    <h2>Question ${currentQuestionIndex + 1} of ${questions.length}:</h2>
    <h3>${questions[currentQuestionIndex].questionText}</h3>
    <p id='select-error' class='hidden'>Please select an answer to continue</p>
    <form class='questions'>
          <input type='radio' value='${questions[currentQuestionIndex].choices[0].correct}' name='choice' id='q1'>
          <label for='q1'>${questions[currentQuestionIndex].choices[0].choiceText}</label><br>
          <input type='radio' value='${questions[currentQuestionIndex].choices[1].correct}' name='choice' id='q2'>
          <label for='q2'>${questions[currentQuestionIndex].choices[1].choiceText}</label><br>
          <input type='radio' value='${questions[currentQuestionIndex].choices[2].correct}' name='choice' id='q3'>
          <label for='q3'>${questions[currentQuestionIndex].choices[2].choiceText}</label><br>
          <input type='radio' value='${questions[currentQuestionIndex].choices[3].correct}' name='choice' id='q4'>
          <label for='q4'>${questions[currentQuestionIndex].choices[3].choiceText}</label><br>
        </form>
    `
}

beginButton.addEventListener('click', function() {
  introContainer.classList.add('hidden');
  renderQuestion(currentQuestionIndex);
  resetButton.classList.remove('hidden');
})

resetButton.addEventListener('click', function() {
  currentQuestionIndex = 0;
  renderQuestion(currentQuestionIndex);
  introContainer.classList.remove('hidden');
  questionContainer.classList.add('hidden');
  backButton.classList.add('hidden');
  nextButton.classList.remove('hidden');
  nextButton.textContent = 'Next';
  answers.length = 0;
  resetButton.classList.add('hidden');
});

nextButton.addEventListener('click', function() {
  let radiobuttons = document.querySelectorAll('input[name="choice"]');
  let radioButtonChecked = false;
  let radioButtonValue;
  for (let radiobutton of radiobuttons) {
    if (radiobutton.checked) {
      radioButtonValue = radiobutton.value;
      radioButtonChecked = true;
    }
  }
  if (radioButtonChecked === true) {
    backButton.classList.remove('hidden');
    answers.push(radioButtonValue);
    currentQuestionIndex++;
    if (currentQuestionIndex === questions.length-1) {
        nextButton.textContent = 'Submit';
    }
    else if (currentQuestionIndex === questions.length) {
      renderResults(calculateResults());
    }
    renderQuestion(currentQuestionIndex);
    radioButtonChecked = false;
  }
  else {
      document.querySelector('.error').classList.remove('hidden');
    }
});

backButton.addEventListener('click', function() {
  answers.pop();
  if (currentQuestionIndex === 2) {
    nextButton.textContent = 'Next';
  }
  currentQuestionIndex--;
  renderQuestion(currentQuestionIndex);
  if (currentQuestionIndex === 0) {
    backButton.classList.toggle('hidden');
  }
});

function calculateResults() {
  let correctCount = 0;
  for (let correct of answers) {
    if (correct === 'true') {
      correctCount++;
    }
  }
  let percent = (correctCount/questions.length*100).toFixed(0);
  let result = `You got ${percent}% correct : ${correctCount} / ${questions.length}`;
  return result;
}

function renderResults(result) {
  questionContainer.classList.add('quiz-statement');
  questionContainer.innerHTML = `
    <h3>The Results are in!</h3>
    <p>${result}</p>
  `;
  backButton.classList.add('hidden');
  nextButton.classList.add('hidden');
}