
//BONUS
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 =>  tra 1 e 80
// con difficoltà 2 => tra 1 e 50
var difficolta = parseInt(prompt("Inserisci il livello di difficoltà (0, 1 o 2)"));
var range;
var tentativi = range - 16

// if (difficolta == 0) {
//   range = 100;
// } else if (difficolta == 1) {
//   range = 80;
// } else if (difficolta == 2) {
//   range = 20;
// } else {
//   alert("Per favore inserire solo i numeri 0, 1 o 2");
// }
switch (difficolta) {
  case 0:
    range = 100;
    break;
  case 1:
    range = 80;
    break;
  case 2:
    range = 50;
    break;
  default:
  range = 17;
}

// 1. GENERO 16 NUMERI RANDOM DA 1 A 100
var bombe = [];
while(bombe.length < 16){
    var random = Math.floor(Math.random() * range) + 1;
    if(bombe.indexOf(random) === -1) bombe.push(random);
}
console.log(bombe)

// 2. CHIEDO ALL'UTENTE DI INSERIRE PIU' VOLTE UN NUMERO COMPRESO TRA 1 E 100
var partita = false;
var somma = 0;
var listaNumUtente = [];
while (partita == false) {
    var numeroUtente = parseInt(prompt("Inserisci un numero da 1 a " + range));
     if (bombe.includes(numeroUtente)) {
         alert ("Hai perso! Hai totalizzato " + somma + " punti");
         partita = true;
}
// 3. L'UTENTE NON PUO' INSERIRE LO STESSO NUMERO PIU' VOLTE
// 4. SE IL NUMERO DIGITATO DALL'UTENTE CORRISPONDE AL NUMERO CASUALE ALLORA HA PERSO, ALTRIMENTI VA AVANTI A INSERIRE UN ALTRO NUMERO
// 5. IL SOFTWARE DEVE COMUNICARE IL PUNTEGGIO DEL GIOCATORE, CIOE' QUANTE VOLTE L'UTENTE HA INSERITO UN NUMERO

if (isNaN(numeroUtente) == true || numeroUtente > 100 || numeroUtente < 1) {
    alert("Puoi inserire solo un numero compreso tra 1 e 100");
  } else if (listaNumUtente.indexOf(numeroUtente) >= 0) {
    alert("Questo numero è stato già inserito!!!");
  }else {
    listaNumUtente.push(numeroUtente);
  };
  somma++;
};
