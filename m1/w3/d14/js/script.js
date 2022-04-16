//1

let pizza = 'la mia pizza preferita è la margherita';
let maiuscolo = pizza.toUpperCase();
console.log(maiuscolo);

pizza = 'LA MIA PIZZA PREFERITA è LA MARGHERITA';
let minuscolo = pizza.toLowerCase();
console.log(minuscolo);

pizza = 'la mia pizza preferita è la margherita';
let arrPizza = pizza.split(' ');
console.log(arrPizza);

let prima = arrPizza[0] +' '+ arrPizza[1]+ ' ';
let seconda = arrPizza[4] +' '+ arrPizza[6];

let unire = prima.concat(seconda);
console.log(unire)
//2

let arry = [
    'Andre',
    'Alessandro',
    'Filippo',
    'Riccardo',
    'Emanuele'
];
//3
console.log(arry[2]);
//4
console.log(arry.length)

let lunghezza = 'La lunghezza dell\'array è ' + arry.length;
console.log(lunghezza)
//5
//6
let colori = ['rosa', 'viola', 'arancione', 'blu', 'rosso', 'verde']
console.log(colori);

colori.push('giallo');
console.log(colori);

colori.pop();
console.log(colori);


colori.unshift('oro');
console.log(colori);

colori.shift();
console.log(colori);
