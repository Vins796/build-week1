// puntatori
const inputCheckbox = document.getElementById('checkbox');
const link = document.getElementById('linkDomande');

// funzione procedi
function proceed() {  
  // se checkbox è checkato procedi - altrimenti ritorna errore
  if (inputCheckbox.checked) {
    link.href = 'pages/domanda.html';
  } else {
    link.setAttribute('disabled', 'true');
    inputCheckbox.classList.add("error");
  }
}

// event listner per pulire errore sul checkbox
inputCheckbox.addEventListener("click", function() {
  inputCheckbox.classList.remove("error");
})