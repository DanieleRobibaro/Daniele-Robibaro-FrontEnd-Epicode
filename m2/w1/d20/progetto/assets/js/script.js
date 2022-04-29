let now = new Date();
console.log(now);
console.log(now.getDate());

let today = new Date();
console.log(today.getFullYear());
console.log(today.getMonth() + 1);

function test(now) {
  let g = now.getDate();
  let m = mese();
  let a = now.getFullYear();
  mese();
  if (g <= 9) {
    g = "0" + g;
  }
  return g + "/" + m + "/" + a;
}

function mese(now) {
    let m = now.getMonth() + 1;
  m = "0" + m;
  m = m.slice(-2);
}
g = now.getDate();
m = now.getMonth() + 1;
a = now.getFullYear();

document.getElementById("giorno").innerHTML = test(today);
document.getElementById("numero").innerHTML = "Giorno: " + g;
document.getElementById("mese").innerHTML = "Mese: " + mese(today);
document.getElementById("attuale").innerHTML = today;
