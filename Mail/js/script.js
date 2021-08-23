// 1. Chiedi all’utente la sua email
var email = prompt("Inserisci la tua email");

// 2. Controlla che sia nella lista di chi può accedere
var emailUtente = ["emanuelamocci@yahoo.com", "emanuela96@libero.com", "mocci123@gmail.com"];

for (var i = 0; i < 3; i++) {
    if (email == emailUtente[i]){ 
        alert("Puoi accedere");
        i = 3;
    } else if (i == 2){
        alert("Non puoi accedere");
        }  
}
