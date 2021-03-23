const questions = [
  {
    question: "Austria",
    answers: [
      {text: 'Vienna', correct: true},
      {text: 'Brussels', correct: false},
      {text: 'Amsterdam', correct: false},
      {text: 'Bern', correct: false}
    ]
  },
  {
    question: "Turkey",
    answers: [
      {text: 'Istanbul', correct: false},
      {text: 'Madrid', correct: false},
      {text: 'Ankara', correct: true},
      {text: 'Nicosia', correct: false}
    ]
  },
  {
    question: "Estonia",
    answers: [
      {text: 'Copenhagen', correct: false},
      {text: 'Tallinn', correct: true},
      {text: 'Reykjavik', correct: false},
      {text: 'Vilnius', correct: false}
    ]
  },
  {
    question: "Montenegro",
    answers: [
      {text: 'Sarajevo', correct: false},
      {text: 'Skopje', correct: false},
      {text: 'Zagreb', correct: false},
      {text: 'Podgorica', correct: true}
    ]
  },
  {
    question: "Bosnia and Herzegovina",
    answers: [
      {text: 'Ljubljana', correct: false},
      {text: 'Podgorica', correct: false},
      {text: 'Sarajevo', correct: true},
      {text: 'Sofia', correct: false}
    ]
  },
  {
    question: "Ukraine",
    answers: [
      {text: 'Pristina', correct: false},
      {text: 'Kyiv', correct: true},
      {text: 'Bratislava', correct: false},
      {text: 'Prague', correct: false}
    ]
  },
  {
    question: "Denmark",
    answers: [
      {text: 'Berlin', correct: false},
      {text: 'Brussels', correct: false},
      {text: 'Bern', correct: false},
      {text: 'Copenhagen', correct: true}
    ]
  },
  {
    question: "Greece",
    answers: [
      {text: 'Athens', correct: true},
      {text: 'Helsinki', correct: false},
      {text: 'Sofia', correct: false},
      {text: 'Valletta', correct: false}
    ]
  },
  {
    question: "Hungary",
    answers: [
      {text: 'Bratislava', correct: false},
      {text: 'Bucharest', correct: false},
      {text: 'Budapest', correct: true},
      {text: 'Belgrade', correct: false}
    ]
  },
  {
    question: "Romania",
    answers: [
      {text: 'Budapest', correct: false},
      {text: 'Brussels', correct: false},
      {text: 'Chisinau', correct: false},
      {text: 'Bucharest', correct: true}
    ]
  },
  {
    question: "Serbia",
    answers: [
      {text: 'Belgrade', correct: true},
      {text: 'Lisbon', correct: false},
      {text: 'Skopje', correct: false},
      {text: 'Bratislava', correct: false}
    ]
  },
  {
    question: "Sweden",
    answers: [
      {text: 'Vienna', correct: false},
      {text: 'Bern', correct: false},
      {text: 'Stockholm', correct: true},
      {text: 'Luxembourg', correct: false}
    ]
  },
  {
    question: "Kosovo",
    answers: [
      {text: 'Ljubljana', correct: false},
      {text: 'Pristina', correct: true},
      {text: 'Zagreb', correct: false},
      {text: 'Sarajevo', correct: false}
    ]
  },
  {
    question: "Norway",
    answers: [
      {text: 'Oslo', correct: true},
      {text: 'Amsterdam', correct: false},
      {text: 'Riga', correct: false},
      {text: 'Brussels', correct: false}
    ]
  },
  {
    question: "Armenia",
    answers: [
      {text: 'Tbilisi', correct: false},
      {text: 'Ankara', correct: false},
      {text: 'Tirana', correct: false},
      {text: 'Yerevan', correct: true}
    ]
  },
  {
    question: "Albania",
    answers: [
      {text: 'Tbilisi', correct: false},
      {text: 'Monaco', correct: false},
      {text: 'Tirana', correct: true},
      {text: 'Baku', correct: false}
    ]
  },
  {
    question: "Poland",
    answers: [
      {text: 'Warsaw', correct: true},
      {text: 'Skopje', correct: false},
      {text: 'Moscow', correct: false},
      {text: 'Bratislava', correct: false}
    ]
  },
  {
    question: "Malta",
    answers: [
      {text: 'San Marino', correct: false},
      {text: 'Vaduz', correct: false},
      {text: 'Monaco', correct: false},
      {text: 'Valletta', correct: true}
    ]
  },
  {
    question: "Cyprus",
    answers: [
      {text: 'Helsinki', correct: false},
      {text: 'Nicosia', correct: true},
      {text: 'Monaco', correct: false},
      {text: 'Ljubljana', correct: false}
    ]
  },
  {
    question: "Latvia",
    answers: [
      {text: 'Tallinn', correct: false},
      {text: 'Vaduz', correct: false},
      {text: 'Vilnius', correct: false},
      {text: 'Riga', correct: true}
    ]
  },
  {
    question: "Portugal",
    answers: [
      {text: 'Madrid', correct: false},
      {text: 'Lisbon', correct: true},
      {text: 'Vatican', correct: false},
      {text: 'Rome', correct: false}
    ]
  },
  {
    question: "Ireland",
    answers: [
      {text: 'Helsinki', correct: false},
      {text: 'London', correct: false},
      {text: 'Reykjavik', correct: false},
      {text: 'Dublin', correct: true}
    ]
  },
  {
    question: "France",
    answers: [
      {text: 'Paris', correct: true},
      {text: 'Prague', correct: false},
      {text: 'Amsterdam', correct: false},
      {text: 'London', correct: false}
    ]
  },
  {
    question: "Georgia",
    answers: [
      {text: 'Ankara', correct: false},
      {text: 'Tbilisi', correct: true},
      {text: 'Baku', correct: false},
      {text: 'Yerevan', correct: false}
    ]
  },
  {
    question: "Czechia",
    answers: [
      {text: 'Nicosia', correct: false},
      {text: 'Zagreb', correct: false},
      {text: 'Prague', correct: true},
      {text: 'Skopje', correct: false}
    ]
  }
]


const startButton = document.getElementById('start_btn');
const nextButton = document.getElementById('next_btn');
const questionContainerElement = document.getElementById('question_container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer_buttons');
const current_points = document.getElementById('current_points');
const endGameContainer = document.getElementById('game_end');
const finalScoreSpan = document.getElementById('final_score');
const pointsBox = document.getElementById('points_box');
const counterBox = document.getElementById('counter');
const questionsQuantityBox = document.getElementById('questions_quantity');

let counter = 0;

let arr_answ = document.getElementsByClassName('btn_answer');
let points = 0;
let calc_click_answ_btns = 0;

let used_numbers = [];

function count_answ() {
  calc_click_answ_btns++;
  if (calc_click_answ_btns => 2) {
    for (let i=0;i<arr_answ.length; i++) {
      arr_answ[i].disabled = true;
      arr_answ[i].style.pointerEvents = "none";
    }
  }
}

let shuffledQuestions, currentQuestionIndex;
shuffledQuestions = questions.sort(() => Math.random() - .5);

let questionsQuantity = shuffledQuestions.length;
questionsQuantityBox.textContent = questionsQuantity;

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startGame() {
  document.body.classList.remove('map_background');
  current_points.textContent = points;
  startButton.classList.add('hide');
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove('hide');
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  counter++;
  counterBox.textContent = counter;

  questionElement.innerText = question.question;
  question.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    button.classList.add('btn_answer');
    button.onclick = function() {
      count_answ();
    };
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    button.addEventListener('click', selectAnswer);
    answerButtonsElement.appendChild(button);
  })
}

function resetState() {
  clearStatusClass(document.body);
  pointsBox.classList.remove('hide');
  endGameContainer.classList.add('hide');
  nextButton.classList.add('hide');
  while(answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;

  if (correct) {
      points += 10;
      current_points.textContent = points;
  }
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide');
  }
  else {
    document.body.classList.add('map_background');
    startButton.innerText = 'Restart';
    pointsBox.classList.add('hide');
    finalScoreSpan.textContent = points + '/' + (shuffledQuestions.length*10);
    questionContainerElement.classList.add('hide');
    endGameContainer.classList.remove('hide');
    startButton.classList.remove('hide');
    points = 0;
    counter = 0;
    shuffledQuestions = questions.sort(() => Math.random() - .5);
  }
}

function setStatusClass(element, correct){
  clearStatusClass(element);
  if (correct) {
    element.classList.add('correct');
  }
  else {
    element.classList.add('wrong');
  }
}

function clearStatusClass(element){
  element.classList.remove('correct');
  element.classList.remove('wrong');
}
