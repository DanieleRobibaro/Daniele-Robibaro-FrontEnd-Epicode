
const ANNOCORRENTE = 2022;

function dataNascità(x){
    return ANNOCORRENTE - x;

}

let eta = dataNascità(1998);
console.log(eta);

let anniMancanti = (c) => 65 - c;
console.log('Ti mancano ' + anniMancanti(eta) + ' alla pensione');

function saluto(){

    let s ='Ciao, '
    function nome(){
        let frase = s +'Marco'
        return frase;
    }
    return nome();
}
console.log(saluto());


function costo(s){

    return s >= 100 ? s - s * 0.3 : s;
}
console.log(costo(300));


