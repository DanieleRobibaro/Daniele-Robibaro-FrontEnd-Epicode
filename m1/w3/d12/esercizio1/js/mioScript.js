var anni = 80;
console.log (anni);
let nome = 'Mario';
console.log(nome);
const RESIDENZA = 'Roma';
console.log(RESIDENZA);

//Creare un esempio per dimostrare la differenza fondamentale tra var/let e const

anni = 24;
console.log(anni);
nome = 'Daniele';
console.log(nome)
// RESIDENZA = 'firenze';
// console.log(RESIDENZA)

{
    let cognome = nome + 'Robibaro';
}
// console.log(cognome)
{
    var cittàDiNascità = 'Roma'
}
console.log(cittàDiNascità);


//Assegna diversi tipi di dati alle tue variabili


let impiego = 'Studente';
let secondoImpiego = 'Fattorino';
 
let lavoro = impiego + secondoImpiego;

console.log('La mia giornata si divide in due parti. La mattina sono uno ' + impiego + ' e la sera un ' +secondoImpiego)

// Utilizza anche un tipo booleano e concatenalo in una stringa o ad una variabile di tipo stringa

let bool = true;
console.log('è un booleano?: ' + bool)

//Esegui delle operazioni di somma e sottrazione

let annoDiNascità = 1989;

const ANNOCORRENTE = 2022;

let etaCliente = ANNOCORRENTE - annoDiNascità;

var cliente = 'Fabio'

console.log('Il Sig.' + cliente +' ha ' + etaCliente + ' anni.' )

let a = 3;
let b = 2;
let c = 1;

let somma = a+b+c;
console.log(somma);

c += 1;
a -= 8;

console.log(a)
console.log(c)
console.log(c+a+b)




