// selziono gli elemetni dell'HTML

let inputEl = document.getElementById("__palindroma-input");
let buttonTestEl = document.getElementById("__test-button");
let alertSuccessEl = document.querySelector(".__success-div");
let alertDangerEl = document.querySelector(".__alert-div");
let resetButtonEl = document.getElementById("__reset-button");

// inizializzo una funzione
// cerco un metodo per invertire una stringa e salvo in una variabile la stringa invertita
// faccio una comparazione tra la parola originale e la parola invertia
function checkPalin(str) {
  let revStr = str.split("").reverse().join("");
  if (revStr === str) {
    return true;
  } else {
    return false;
  }
}

/**/
// creo un event listner relativo al button
buttonTestEl.addEventListener("click", function () {
  // chiedo all'utente una parola e la salvo in una variabile
  let userWord = inputEl.value;
  // verificare che l'utente inserisca solo una parola e non un numero o un stringa vuota
  if (
    !isNaN(userWord) ||
    userWord === "" ||
    userWord === undefined ||
    userWord === null
  ) {
    window.alert("Inserisci una parola per vedere se è palindroma");
  } else {
    if (checkPalin(userWord)) {
      alertSuccessEl.style.display = "block";
      alertSuccessEl.innerHTML = `La parola ${userWord} è palindroma`;
    } else {
      alertDangerEl.style.display = "block";
      alertDangerEl.innerHTML = `La parola ${userWord} non è palindroma`;
    }
  }
});

resetButtonEl.addEventListener("click", function () {
  inputEl.value = "";
  alertSuccessEl.style.display = "none";
  alertDangerEl.style.display = "none";
});
