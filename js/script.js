// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 =>  tra 1 e 80
// con difficoltà 2 => tra 1 e 50


var possibilita = 84;
// 1. GENERO 16 NUMERI CASUALI TRA 1 E 100 DIVERSI TRA DI LORO
var numeroCasuale = [];
while(numeroCasuale.length < 16){
    var random = Math.floor(Math.random() * 100) + 1;
    if(numeroCasuale.indexOf(random) === -1) numeroCasuale.push(random);
}
console.log(numeroCasuale);
// 2. CHIEDO ALL'UTENTE DI INSERIRE PIU' VOLTE UN NUMERO COMPRESO TRA 1 E 100
var numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 100"));
while(numeroUtente.lenght < possibilita == false ) {
  numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 100"));
}
console.log(numeroUtente);
// 3. L'UTENTE NON PUO' INSERIRE LO STESSO NUMERO PIU' VOLTE

// 4. SE IL NUMERO DIGITATO DALL'UTENTE CORRISPONDE AL NUMERO CASUALE ALLORA HA PERSO, ALTRIMENTI VA AVANTI A INSERIRE UN ALTRO NUMERO

// 5. IL SOFTWARE DEVE COMUNICARE IL PUNTEGGIO DEL GIOCATORE, CIOE' QUANTE VOLTE L'UTENTE HA INSERITO UN NUMERO
