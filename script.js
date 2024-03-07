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

TODO - 3 - gestire il testo della domanda (questions[i].question)
  
TODO - 4 - gestire i bottoni (input type radio) per risposte sbagliate e corretta

DONE - 5 - gestire il contatore delle domande nella parte bassa della pagina

TODO - 6 - creare un eventListner al click su uno degli input per triggerare prossima iterazione

TODO - 7 - raccogliere le risposte dell'utente e creare un sistema di punteggio

TODO - 8 - a fine test mostrare il punteggio

TODO - 9 - (extra) creare una funzione che randomizza la posizione dei bottoni
  
TODO - 10- (extra) creare un timer di 60 secondi
           allo scadere viene raccolto l'input value dell'utente
           (o niente se non ha selezionato nulla) e prosegue 
           con la prossima iterazione dell'array questions

*/


/* ---------------------------------- PAGINA BENVENUTO ---------------------------------- */

function proceed() {
  const inputCheckbox = document.getElementById("checkbox1");
  const link = document.getElementById("linkDomande");

  if (inputCheckbox.checked) {
    link.href = "pages/domanda.html";
  }
  console.log(inputCheckbox.checked);
}












    
    
 




