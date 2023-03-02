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
    inputEl.value = "";
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

/*Esercizio 2 -------------------------*/
// L’utente sceglie pari o dispari
let selectEvenOddEl = document.getElementById("__form-select-input");

// inserisce un numero da 1 a 5.
let inputNumberEl = document.getElementById("inputNumber");
console.log(inputNumberEl);
let giocaButtonEl = document.getElementById("__gioca-button");

console.log(selectEvenOddEl.value, giocaButtonEl);

// gestisco l'output dei risultati

let alertPcRandomNumEl = document.getElementById("alert-pc-random-num");
let alertSumEl = document.getElementById("alert-sum");

console.log(alertPcRandomNumEl, alertSumEl);

// funzioni

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + 1);
}

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function checkEven(n) {
  if (n % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// up here: funzioni

giocaButtonEl.addEventListener("click", function () {
  if (
    isNaN(Number(inputNumberEl.value)) ||
    inputNumberEl.value === "" ||
    inputNumberEl.value === undefined ||
    inputNumberEl.value === null ||
    Number(inputNumberEl.value) > 5 ||
    Number(inputNumberEl.value) < 1
  ) {
    inputNumberEl.value = "";
    window.alert("Inserisci un numero tra 1 e 5 nel gioco pari e dispari");
  } else {
    let pcRandonNumber = randomNumber(1, 5);
    console.log("Il numero random del pc è: " + pcRandonNumber);
    alertPcRandomNumEl.innerHTML = `Il PC ha generato il numero ${pcRandonNumber}`;
    alertPcRandomNumEl.style.display = "block";

    let sum = Number(inputNumberEl.value) + pcRandonNumber;
    console.log("La somma è: " + sum);
    alertSumEl.innerHTML = `La somma dei due numeri è ${sum}`;
    alertSumEl.style.display = "block";

    // Dichiariamo chi ha vinto.
    if (
      (checkEven(sum) && Number(selectEvenOddEl.value) === 1) ||
      (!checkEven(sum) && Number(selectEvenOddEl.value) === 2)
    ) {
      console.log("Hai vinto");
    } else {
      console.log("Hai perso");
    }
  }
});
