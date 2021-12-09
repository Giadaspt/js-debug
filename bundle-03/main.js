/*******************************************************************************
​
    Per questo esercizio, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/


// ESERCIZIO 1 (suggerimento: ci sono 6 errori)
const cars = [
    {
        manufacturer: 'Ford',
        model: 'Fiesta',
        type: 'diesel'
    },
    {
        manufacturer: 'Audi',
        model: 'A1',
        type: 'benzina'
    },
    {
        manufacturer: 'Volkswagen',
        model: 'Golf',
        type: 'Benzina'
    },
    {
        manufacturer: 'Fiat',
        model: 'Panda',
        type: 'metano'
    },
    {
        manufacturer: 'Fiat',
        model: 'Multipla',
        type: 'GPL'
    },
    {
        manufacturer: 'Tesla',
        model: 'Model 3',
        type: 'elettrico'
    },
    {
        manufacturer: 'Volkswagen',
        model: 'Polo',
        type: 'benzina'
    },
    {
        manufacturer: 'Ford',
        model: 'Kuga',
        type: 'Diesel'
    },
    {
        manufacturer: 'Seat',
        model: 'Ibiza',
        type: 'metano'
    },
    {
        manufacturer: 'Audi',
        model: 'R8',
        type: 'Benzina'
    },
];

const gasolineCars = cars.filter( (auto) => auto.type.toLowerCase() === 'benzina'); 

const dieselCars = cars.filter( (auto) => {
   return auto.type.toLowerCase() === 'diesel'; 
});

const otherCars = cars.filter( (auto) => {
    return auto.type.toLowerCase() !== 'benzina' && auto.type.toLowerCase() !== 'diesel'; 
});

console.log('Auto a benzina');
console.log('*******************************');
console.log(gasolineCars);

console.log('Auto a diesel');
console.log('*******************************');
console.log(dieselCars);

console.log('Tutte le altre auto');
console.log(otherCars);

// 1. questo codice serve per filtrare le maccchine dividendole per tipologia di carburante: quelle a benzina, quelle diesel e poi tutte le altre (metano, gpl etc...).
// 2. errori di sintassi: 1) riga 59 mancava una virgola dopo la chiusura dell'oggetto, 2) nella funzione filter a riga 67 la freccia era al contrario quindi invece di essere => era messa >= che significa maggiore-uguale a ...
// 3. errori di logica: 1) tutte le volte in cui si ricerca un valore di una proprietà o in generale una stringa si deve sempre aggiungere LowerCase o UpperCase perchè altrimenti potrebbero le maiuscole o minuscole non vengono calcolate e quindi la validazione della stringa è sbagliata questo errore è stato riscontrato in tutte e tre le funzioni filter, 2) mancava il return a riga 70 (filter prevede sempre il return, con foreach e map non è indispensabile), 3) a riga 74 invece di or (||)c'andava and (&&) perchè vanno esclusi entrambi i carburanti per avere i restanti.