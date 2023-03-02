// selziono gli elemetni dell'HTML+

// chiedo all'utente una parola e la salvo in una variabile
let userWord = prompt("Inserisci una parola");
// metto un ciclo while per verificare che l'utente inserisca solo una parola e non un numero o un stringa vuota

while (
  !isNaN(userWord) ||
  userWord === "" ||
  userWord === undefined ||
  userWord === null
) {
  userWord = prompt("Inserisci una parola di più di una lettera");
}

// inizializzo una funzione
// cerco un metodo per invertire una stringa e salvo in una variabile la stringa invertita
// faccio una comparazione tra la parola originale e la parola invertia
