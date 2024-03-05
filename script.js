const questions = [
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  // {
  //   category: "Science: Computers",
  //   type: "multiple",
  //   difficulty: "easy",
  //   question:
  //     "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
  //   correct_answer: "Final",
  //   incorrect_answers: ["Static", "Private", "Public"],
  // },
  // {
  //   category: "Science: Computers",
  //   type: "boolean",
  //   difficulty: "easy",
  //   question: "The logo for Snapchat is a Bell.",
  //   correct_answer: "False",
  //   incorrect_answers: ["True"],
  // },
  // {
  //   category: "Science: Computers",
  //   type: "boolean",
  //   difficulty: "easy",
  //   question:
  //     "Pointers were not used in the original C programming language; they were added later on in C++.",
  //   correct_answer: "False",
  //   incorrect_answers: ["True"],
  // },
  // {
  //   category: "Science: Computers",
  //   type: "multiple",
  //   difficulty: "easy",
  //   question:
  //     "What is the most preferred image format used for logos in the Wikimedia database?",
  //   correct_answer: ".svg",
  //   incorrect_answers: [".png", ".jpeg", ".gif"],
  // },
  // {
  //   category: "Science: Computers",
  //   type: "multiple",
  //   difficulty: "easy",
  //   question: "In web design, what does CSS stand for?",
  //   correct_answer: "Cascading Style Sheet",
  //   incorrect_answers: [
  //     "Counter Strike: Source",
  //     "Corrective Style Sheet",
  //     "Computer Style Sheet",
  //   ],
  // },
  // {
  //   category: "Science: Computers",
  //   type: "multiple",
  //   difficulty: "easy",
  //   question:
  //     "What is the code name for the mobile operating system Android 7.0?",
  //   correct_answer: "Nougat",
  //   incorrect_answers: [
  //     "Ice Cream Sandwich",
  //     "Jelly Bean",
  //     "Marshmallow",
  //   ],
  // },
  // {
  //   category: "Science: Computers",
  //   type: "multiple",
  //   difficulty: "easy",
  //   question: "On Twitter, what is the character limit for a Tweet?",
  //   correct_answer: "140",
  //   incorrect_answers: ["120", "160", "100"],
  // },
  // {
  //   category: "Science: Computers",
  //   type: "boolean",
  //   difficulty: "easy",
  //   question: "Linux was first created as an alternative to Windows XP.",
  //   correct_answer: "False",
  //   incorrect_answers: ["True"],
  // },
  // {
  //   category: "Science: Computers",
  //   type: "multiple",
  //   difficulty: "easy",
  //   question:
  //     "Which programming language shares its name with an island in Indonesia?",
  //   correct_answer: "Java",
  //   incorrect_answers: ["Python", "C", "Jakarta"],
  // },
];

// puntatore div contenitore della domanda 
const questionContainer = document.getElementById('question')

// cicliamo l'array di oggetti "questions"
for (let i = 0; i < questions.length; i++) {

  // creiamo un tag p dove infilarci dentro il testo della domanda
  let titoloDomanda = document.createElement('p');

  // TODO - rendering del bottone per confermare, tramite eventListener
  // let bottone = document.createElement('button');

  // inseriamo dentro "titoloDomanda" il testo della domanda
  titoloDomanda.textContent = questions[i].question;

  // inseriamo dentro il div contenitore "questionContainer" il nostro tag p con il testo della domanda
  questionContainer.appendChild(titoloDomanda);

  // creiamo una variabile con dentro l'array "incorrect_answers" di ogni singola question
  let incorrectAnswers = questions[i].incorrect_answers
  
  // cicliamo "incorrectAnswers"
  for (let n = 0; n < incorrectAnswers.length; n++) {

    // inizializiamo la varibile "questionType" come una stringa
    let questionType = '';

    // check - se "questions[i].type" === multiple allora questionType sarà "checkbox", altrimenti "Radio"
    if (questions[i].type === 'multiple') {
      questionType = 'checkbox';
    } else {
      questionType = 'radio';
    }

    // creiamo un div contenitore di tutte gli input
    let risposte = document.createElement('div'); 

    // inseriamo dentro il nuovo div l'html degli input, uno per ogni elmemento dell'array "incorrectAnswers"
    risposte.innerHTML = `<input type='${questionType}' value='${pippo[n]}'> <label>${pippo[n]}</label>`

    // inseriamo dentro il div contenitore "questionContainer" il nostri tag input con le opzioni di risposta
    questionContainer.appendChild(risposte);
  }
}
    
    
 




