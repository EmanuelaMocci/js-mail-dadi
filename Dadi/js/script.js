
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

    

