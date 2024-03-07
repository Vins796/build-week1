const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

/*
  
  TODO LIST
  
  DONE - 1 - creare un contenitore per la domanda e le risposte
  
  DONE - 2 - creare funzione per fare la domanda (una alla volta)
  
  DONE - 3 - gestire il testo della domanda (questions[i].question)
    
  DONE - 4 - gestire i bottoni (input type radio) per risposte sbagliate e corretta
  
  DONE - 5 - gestire il contatore delle domande nella parte bassa della pagina
  
  DONE - 6 - creare un eventListner al click su uno degli input per triggerare prossima iterazione
  
  DONE - 7 - raccogliere le risposte dell'utente e creare un sistema di punteggio
  
  DONE - 8 - a fine test mostrare il punteggio
  
  TODO - 9 - (extra) creare una funzione che randomizza la posizione dei bottoni
    
  TODO - 10- (extra) creare un timer di 60 secondi
             allo scadere viene raccolto l'input value dell'utente
             (o niente se non ha selezionato nulla) e prosegue 
             con la prossima iterazione dell'array questions
  
  */

// PAGINA DOMANDE

/* ---------------------------------- PAGINA DOMANDA ---------------------------------- */

// puntatore div contenitore della domanda
const questionContainer = document.getElementById("question");
let contatore = 0;
let risposteGiuste = 0;

// inizializzazione timer
const timerDiv = document.getElementById("timer") 
let timerInterval = null


// funzione che fa la domanda
function makeQuestion() {
  // puliamo il container
  questionContainer.innerHTML = "";

  //  se contatore ugiale alla lunghezza dell'array mostriamo i risultati del test altrimenti altra domanda
  if (contatore >= questions.length) {
    timerDiv.innerHTML = "";
    questionContainer.innerHTML = `<h2> Complimenti! Hai completato il quiz. Hai totalizzato ${risposteGiuste} risposte corrette su ${contatore} </h2>`;
    return;
  } else {

    // const che contiene la domanda corrente
    const questionNumber = questions[contatore];


    // start timer
    timer()

    /* ----------------- DOMANDA ----------------- */

    // creiamo un tag h2 dove infilarci dentro il testo della domanda
    let titoloDomanda = document.createElement("section");

    // inseriamo dentro "titoloDomanda" il testo della domanda
    if (questionNumber.question.length >= 35) {
      titoloDomanda.innerHTML = `<h2 class="long-text">${questionNumber.question}</h2>`;
    } else {
      titoloDomanda.innerHTML = `<h2>${questionNumber.question}</h2>`;
    }


    // inseriamo dentro il div contenitore "questionContainer" il nostro tag h2 con il testo della domanda
    questionContainer.appendChild(titoloDomanda);

    /* ----------------- RISPOSTE ----------------- */

    // creiamo una variabile con dentro l'array "incorrect_answers" di ogni singola question
    let answers = questionNumber.incorrect_answers.concat(
      questionNumber.correct_answer
    );

    // cicliamo "answers"
    let contenitoreButton = document.createElement("section");
    contenitoreButton.innerHTML = '<div id="contenitoreButton" class="contenitore-button"></div>';
    questionContainer.appendChild(contenitoreButton);

    let divButton = document.getElementById('contenitoreButton')

    for (let n = 0; n < answers.length; n++) {
      // creiamo un button contenitore di tutte gli input
      let risposteContainer = document.createElement("button");

      // inseriamo dentro il nuovo div l'html degli input, uno per ogni elmemento dell'array "answers"
      risposteContainer.innerHTML = `
        <input id='idInput${[
          n,
        ]}' type='radio' name='questionNumber${contatore}' value='${
        answers[n]
      }'> <label for='idInput${[n]}' >${answers[n]}</label>
        `;

      // inseriamo dentro il div contenitore "questionContainer" il nostri tag input con le opzioni di risposta
      divButton.appendChild(risposteContainer);

      
      // console.log(currentQuestion.correct_answer);
      // console.log(answers[n].valueOf());
      // // console.log(risposteContainer);
    }


    /* ------------- BOTTONE DI CONFERMA ------------- */

    // let bottone = document.createElement("div");
    // bottone.innerHTML = '<button id="confirmButton">Conferma Risposta</button>';
    // questionContainer.appendChild(bottone);
    // const confirmAnswer = document.getElementById("confirmButton");

    const radioInput = Array.from(document.getElementsByTagName('input'));

    radioInput.forEach(input => {
        input.addEventListener('click', function () {
            input.classList.add('checked')
            if (input.value === questionNumber.correct_answer) {
                risposteGiuste++;
            } 
            setTimeout(() => {                
                contatore++;
                makeQuestion();
            }, 1500);
        })
    })
    // console.log(radioInput);


    /* ------------- CONTATORE DOMANDE ------------- */

    let counterDomande = document.createElement("div");
    counterDomande.innerHTML = `<h4>Question ${contatore + 1}<span class="primary">/${
      questions.length
    }</span></h4>`;
    questionContainer.appendChild(counterDomande);

    // FUNZIONE PER LA CONFERMA DELLA RISPOSTA
    // puntatore del bottone

    // confirmAnswer.addEventListener("click", function () {
    //   // prendiamo l'input dell'utente
      

    //   // controllo se la risposta è corretta
    //   if (selectedAnswer.value === currentQuestion.correct_answer) {
    //     risposteGiuste++;
    //     console.log(risposteGiuste);
    //   }

    //   // domanda successiva
    //   contatore++;
    //   makeQuestion();
    //   // console.log(contatore);
    // });
  }
}

makeQuestion();


// TIMER
function timer() {

  const FULL_DASH_ARRAY = 283;
  const WARNING_THRESHOLD = 10;
  const ALERT_THRESHOLD = 5;
  
  const COLOR_CODES = {
    info: {
      color: "green"
    },
    warning: {
      color: "orange",
      threshold: WARNING_THRESHOLD
    },
    alert: {
      color: "red",
      threshold: ALERT_THRESHOLD
    }
  };

  clearInterval(timerInterval);
  
  const TIME_LIMIT = 3;
  let timePassed = 0;
  let timeLeft = TIME_LIMIT;
  let remainingPathColor = COLOR_CODES.info.color;

timerDiv.innerHTML = `
  <div class="base-timer">
    <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <g class="base-timer__circle">
        <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
        <path
          id="base-timer-path-remaining"
          stroke-dasharray="283"
          class="base-timer__path-remaining ${remainingPathColor}"
          d="
            M 50, 50
            m -45, 0
            a 45,45 0 1,0 90,0
            a 45,45 0 1,0 -90,0
          "
        ></path>
      </g>
    </svg>
    <span id="base-timer-label" class="base-timer__label">
      <span class="text-timer">seconds</span>
      ${formatTime(timeLeft)}
      <span class="text-timer">remaining</span>
    </span>
  </div>
  `;
  
  startTimer();
  
  function onTimesUp() {
    clearInterval(timerInterval);
    contatore++;
    makeQuestion();
  }
  
  function startTimer() {
    timerInterval = setInterval(() => {
      timePassed = timePassed += 1;
      timeLeft = TIME_LIMIT - timePassed;
      document.getElementById("base-timer-label").innerHTML = `
      <span class="text-timer">seconds</span>
      ${formatTime(timeLeft)}
      <span class="text-timer">remaining</span>
      `
      setCircleDasharray();
      setRemainingPathColor(timeLeft);
  
      if (timeLeft === 0) {
        onTimesUp();
      }
    }, 1000);
  }
  
  function formatTime(time) {
    let seconds = time % 60;
  
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
  
    return `${seconds}`;
  }
  
  function setRemainingPathColor(timeLeft) {
    const { alert, warning, info } = COLOR_CODES;
    if (timeLeft <= alert.threshold) {
      document
        .getElementById("base-timer-path-remaining")
        .classList.remove(warning.color);
      document
        .getElementById("base-timer-path-remaining")
        .classList.add(alert.color);
    } else if (timeLeft <= warning.threshold) {
      document
        .getElementById("base-timer-path-remaining")
        .classList.remove(info.color);
      document
        .getElementById("base-timer-path-remaining")
        .classList.add(warning.color);
    }
  }
  
  function calculateTimeFraction() {
    const rawTimeFraction = timeLeft / TIME_LIMIT;
    return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
  }
  
  function setCircleDasharray() {
    const circleDasharray = `${(
      calculateTimeFraction() * FULL_DASH_ARRAY
    ).toFixed(0)} 283`;
    document
      .getElementById("base-timer-path-remaining")
      .setAttribute("stroke-dasharray", circleDasharray);
  }
}

