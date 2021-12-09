/*******************************************************************************
​
    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/


// ESERCIZIO 1
function checkAge() {
    const myAge = 32;
    let message = '';

    if (myAge <= 18) {
        message = 'Sei troppo giovane! Hai meno di 18 anni!';
    } else  {
        message = 'Hai più di 18 anni!';
    }

    return message
}
checkAge();
// 1. funzione con una condizione all'interno dove se si ha 18 o memo esce un messaggio altrimenti un altro. Di base uscira il messaggio che si ha più di 18 anni perchè l'età indicata è di 32 anni.
// 2. in questo caso deve essere usato let, nella seconda variabile, invece che const perchè la variabile camnbia (può essere usata anche var per tutto altrimenti)
// 3. non so se definirlo proprio un errore di logica ma i backticks ed il template literal non servivano in questo caso visto che si sa dall'inizio che l'età è 32 anni e che la condizione prevede di essere minorenne o 18enne al massimo per il messaggio dove c'erano. Il dato dell'età non cambia se ci fosse stato un prompt che chiedeva l'età e sarebbe potuta essere sempre diversa era un altro conto ed il commento sarebbe variato dall'età che l'utente avrebbe inserito. In ogni caso cambiando l'età cambia anche il messagio, mancava comunque il return per il riscontro.

// ESERCIZIO 2
function printColorsNumber() {
    const colors = ['blue', 'red', 'yellow', 'green', 'black'];
    console.log(`Nella mia palette ci sono ${colors.length} colori!`);

    return colors.length
}
printColorsNumber();
// 1. questa funzione serve per sapere quanti colori ci sono nella mia palette, che sarebbero il numero degli indici dell'array.
// 2. non ci sono errori di sintassi
// 3. senza il return non possiamo avere un riscontro della funzione e dei colori che ci sono nella palette


//ESERCIZIO 3
function addNumbers() {
    const userNumber = prompt('Inserisci un numero');
    const total = userNumber + 12;

    console.log(`Il risultato finale è ${total}`);
}
addNumbers();


// ESERCIZIO 4
// function checkAccess() {
//     const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
//     const userEmail = prompt('Inserisci il tuo indirizzo email');

//     let grantAccess = 'false';

//     if (addresses.includes(userEmail)) {
//         grantAccess = 'true';
//     }

//     if (grantAccess === true) {
//         console.log('Accesso consentito!');
//     } else {
//         console.log('Accesso negato!');
//     }
// }
// checkAccess();


// ESERCIZIO 5 (suggerimento: c'è un solo errore)

// function checkAccessImproved() {
//     const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

//     const userEmail = prompt('Inserisci il tuo indirizzo email');

//     let grantAccess = false;

//     for (let i = 0; i < addresses.length; i++) {
//      const email = addresses[i];
        
//       if (userEmail.length > 5) {
            
//         if (email === userEmail) {
//         grantAccess = 'true';            
            
//       }
        
//     }

//     if (grantAccess) {
//         console.log('Accesso consentito!');
//     } else {
//         console.log('Accesso negato!');
//     }
//     }
// };

// checkAccessImproved();

// 1. questa funzione serve per dare l'accesso o no, inserendo una email. Viene chiesto all'utente di inserire il suo indirizzo email, se l'email deve avere una lunghezza maggiore di 5 caratteri e quella inserita dall'utente deve essere uguale a quella nell'array altrimenti "Accesso negato!", se rispetta tutti i parametri detti sopra l'utente può effettaure l'acesso "Accesso consentito!"
// 2. Mancava la chiusura delle graffe della funzione, quindi l'errore era puramente di sintassi.
