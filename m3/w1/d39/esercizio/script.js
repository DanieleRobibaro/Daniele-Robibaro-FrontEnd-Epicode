function numeriCasuali(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
//   let input1 = document.createElement('input')
//   let input2 = document.createElement('input')
//   let body = document.querySelector('body')
// //   if(body)
//   body!.append(input1, input2)
var numeroCoretto = numeriCasuali(1, 100);
console.log(numeroCoretto);
var giocatore1 = 10;
var giocatore2 = 90;
var scarto1;
var scarto2;
if (giocatore1 == numeroCoretto) {
    console.log('il giocatore 1 ha indovinato !');
}
else {
    scarto1 = Math.abs(numeroCoretto - giocatore1);
    console.log(scarto1);
}
if (giocatore2 == numeroCoretto) {
    console.log('il giocatore 2 ha indovinato !');
}
else {
    scarto2 = Math.abs(numeroCoretto - giocatore2);
    console.log(scarto2);
}
if (scarto1 < scarto2 && giocatore2 != numeroCoretto && giocatore1 != numeroCoretto) {
    console.log("Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 1 si è avvicinato di più! il numero era " + numeroCoretto);
}
else if (scarto1 > scarto2 && giocatore2 != numeroCoretto && giocatore1 != numeroCoretto) {
    console.log("Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 2 si è avvicinato di più! il numero era " + numeroCoretto);
}
