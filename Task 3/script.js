const quiz = document.getElementById('quiz');
const submit = document.getElementById('submit');
let score = 0;

const questions = [
  {
    question: 'What does HTML stand for?',
    answers: [
      {text: 'Hyper Text Markup Language', correct: true},
      {text: 'Hyperlinks and Text Markup Language', correct: false},
      {text: 'Home Tool Markup Language', correct: false},
      {text: 'None of the above', correct: false}
    ]
  },
  {
    question: 'What does CSS stand for?',
    answers: [
      {text: 'Creative Style Sheets', correct: false},
      {text: 'Cascading Style Sheets', correct: true},
      {text: 'Computer Style Sheets', correct: false},
      {text: 'Colorful Style Sheets', correct: false}
    ]
  },
  {
    question: 'What does JS stand for?',
    answers: [
      {text: 'Java Syntax', correct: false},
      {text: 'JavaScript', correct: true},
      {text: 'JustScript', correct: false},
      {text: 'JollySoup', correct: false}
    ]
  }
];

function showQuiz() {
  let quizHTML = '';
  questions.forEach((question, index) => {
    quizHTML += `<div class="question"><strong>Question ${index + 1}:</strong> ${question.question}</div>`;
    question.answers.forEach(answer => {
      quizHTML += `<label class="answer"><input type="radio" name="question${index}" value="${answer.text}"> ${answer.text}</label>`;
    });
  });
  quiz.innerHTML = quizHTML;
}

function checkAnswers() {
  let answerInputs = document.querySelectorAll('input[type="radio"]:checked');
  answerInputs.forEach(answer => {
    let questionIndex = answer.name.slice(-1);
    let selectedAnswer = answer.value;
    let correctAnswer = questions[questionIndex].answers.find(answer => answer.correct).text;
    if (selectedAnswer === correctAnswer) {
      score++;
      answer.parentElement.classList.add('correct');
    } else {
      answer.parentElement.classList.add('incorrect');
    }
  });
  alert(`You scored ${score} out of ${questions.length} questions.`);
  score = 0;
  showQuiz();
}

showQuiz();
submit.addEventListener('click', checkAnswers);
