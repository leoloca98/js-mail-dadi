/*

Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto e stampare il risultato.

*/

// !DADI
/*

1 - Creare una variabile per il giocatore e un'altra per il computer
2 - Generare un numero casuale tra 1 e 6 (compresi) e assegnarlo al giocatore
3 - Stessa cosa ma assegnarla al computer
4 - Creare una variabile che servirà per il controllo del risultato
5 - Sottrarre il numero ottenuto dal giocatore con quello ottenuto dal computer
6 - Assegnare il risultato alla variabile citata nel punto 4
7 - Se il risultato è maggiore di 0 allora il vincitore è il giocatore
8 - Se il risultato è uguale a 0 allora ci sarà un pareggio
9 - Se il risultato è minore di 0 la vittoria andrà al computer
10 - Stampare il risulato ottenuto e la conseguente scitta "You Win / You Lose / Draw"

*/
// *Variabili per assegnare il valore al giocatore e al computer
var userDice;
var computerDice;

// *Assegnare il valore casuale alle variabili citate a rigo 24
userDice = Math.round(Math.random() * 6);
computerDice = Math.round(Math.random() * 6);
console.log("userDice: " + userDice);
console.log("computer Dice: " + computerDice);
// *Variabile che conterrà il risultato del controllo
var result;

// *Calcolo del vincitore
result = userDice - computerDice;
console.log(result);

// *Assegnazione del vincitore in base a...
if (result < 0) {
    document.getElementById("loser").innerHTML = "You Lose";
}
if (result == 0) {
    document.getElementById("draw").innerHTML = "Draw";
}
if (result > 0) {
    document.getElementById("winner").innerHTML = "You Win";
}