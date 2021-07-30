// // 1. Chiedi all’utente la sua email
// var email = parseInt(prompt("Inserisci la tua email"));

// // 2. Controlla che sia nella lista di chi può accedere
// var emailUtente = ["emanuelamocci@yahoo.com", "emanuela96@libero.com", "mocci123@gmail.com"];
// console.log(emailUtente);

// emailUtente[0] //emanuelamocci@yahoo.com
// emailUtente[1] //emanuela96@libero.com
// emailUtente[2] //mocci123@gmail.com


// if ( emailUtente == "emanuelamocci@yahoo.com" ){
//     alert("Puoi accedere");
// } else if ( emailUtente != "emanuelamocci@yahoo.com"){
//     alert("Non puoi accedere");
// } 

// 3. Stampa un messaggio appropriato sull’esito del controllo
//----------------------------------

// 1. Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
var numeroGiocatore = Math.floor(Math.random() * 6) +1;
console.log(numeroGiocatore);

var numeroPc = Math.floor(Math.random() * 6) +1;
console.log(numeroPc);

// 2. Stabilire il vincitore, in base a chi fa il punteggio più alto.
document.getElementById('Giocatore').innerHTML = "Il tuo numero è: " + numeroGiocatore;
document.getElementById('Computer').innerHTML = "Il numero del computer è: " + numeroPc;

if ( numeroGiocatore > numeroPc ){
        alert("Hai vinto");
    } else if ( numeroPc > numeroGiocatore){
        alert("Hai perso");
    } else {
        alert("Pareggio");
    }

    

