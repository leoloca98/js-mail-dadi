/*

Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.

Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto e stampare il risultato.

*/

// !MAIL
/*
1 - Creare un array di 10 mail (stile whitelist) che useremo per confrontare con quella inserita dell'utente
2 - Chidiamo all'utente di inserire la sua mail
3 - Verifichiamo se la mail inserita è presente nella whitelist
4 - Se è presente diamo un OK alla validazione della mail, altrimenti richiediamo di inserire un'altra mail dando un errore.
5 - Stampare in HTML: "Benvenuto + mail"
*/

// *Creiamo un array stile whitelist con 10 mail 
var whitelist;
whitelist = ["leonardolocatelli98@gmail.com", "luigimicco@gmail.com", "riccardopetricca@gmail.com", "marcolancellotti@gmail.com", "chiarapassaro@gmail.com", "davideinzaghi@gmail.com", "giorgioandrei@gmail.com", "sarapasinato@gmail.com", "roccofranchini@gmail.com", "valentinafrasca@gmail.com"];

// *Chiediamo all'utente di inserire la sua mail
var userMail;
userMail = prompt("Inserisci la tua mail");

//* Verifichiamo che la mail inserita sia presente nella whitelist

for (i = 0; i < whitelist.length; i++) {
    if (whitelist[i] == userMail) {
        i = 20;
    }
    console.log(whitelist[i]);
}

// *Se la mail inserita è presente nella whitelist allora...
var correctMail;
var wrongMail;


if (i > whitelist.length) {
    // Stampa "Benvenuto + mail"
    document.getElementById("correct").innerHTML = "Benvenuto " + userMail;

}
// * Al contratio se non lo è allora...

else {
    // Stampa "inserire un'altra mail"
    document.getElementById("wrong").innerText = "Mail non registrata";
}