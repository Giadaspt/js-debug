/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i < 5; i++) {
    //console.log(i);
}
// 1. questo è un ciclo for che cicla i per 5 volte un numero e/o un parametro dandoci 5 risultati in quiesto caso numeri interi da 0 a 4
// 2. il segno < era messo al contrario 
// 3. se il segno è al contrario in questo caso il ciclo è inutile


// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 == 0)
    {
        return num + 5;
    }
    return num;
}
//  1. questa è una funzione che, nel caso in cui i numeri sono divisibili per due con resto zero ci vengono restuiti questi numeri con una sommato il numero 5 (es. num=8, quindi risultato 13), altrimenti ci restituisce qualsiasi numero
//  2. era presente un errore di sintassi perchè gli uguali (per definire che un numero abbia il resto uguale a 0) devono essere più di uno, nel caso in cui si debba avere una uguaglianza assoluta gli uguali devono essere 3, oppure !== da 1
//  3. non ci sono errori di logica



// ESERCIZIO 3
function loopToFive() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}
// 1. questa è una funzione che sta svolgendo un ciclo for al suo interno, per 5 volte
// 2. sono presenti errori di sintassi: al posto delle virgole (,) vanno usati i punti e virgola (;) sia nella funzione che all'interno del ciclo for
// 3. non ci sono errori logici


// ESERCIZIO 4 (suggerimento: ci sono 7 errori)

function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];

    for (let i = 0; i < numbers.length; i++) { 
        if (numbers[i] % 2 == 0){ 
            evenNumbers.push(numbers[i]); 
        }
    }
    return evenNumbers;
    //console.log(evenNumbers);
}
displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]

// 1. con questa funzione dato un array con numeri da 1 a 8 deve restituirci un array, che inizialmente è vuoto, con solo i numeri positivi, che vengono pushati dal primo array all'altro con un ciclo for.
// 2. ci sono errori di sintassi: 1) il ; dopo i++ non va messo si chiude la parentesi tonda e basta, 2) come prima il resto di 2 che è 0 va scritto con due o tre uguali, oppure !== da 1 , 3) c'era un punto e virgola dopo la parentesi della condizione che non doveva esserci
// 3. ci sono errori logici: 1) il -1 va messo al termine della lunghezza dell'array nel caso cui vogliamo prendere in considerazione l'ultimo numero dell'array in questo caso il ciclo vas fatto su tutto l'array perchè vanno analizzati tuti i numeri e presi quelli pari, 2-3) all'interno dell'array vanno pushati i numeri pari ciclati dal primo array quindi direttamente ogni indece pari dell'array (condizione if dice che devono essere pari) quindi invece di andarci la i deve esser specificato l'indice dell'array, 4) nella condizione allo stesso modo del push devono esserci solo gli indici dell'array e non tutto l'array