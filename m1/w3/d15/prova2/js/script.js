let totaleAdesso = 0;

let carica = "0";

let operazionePrevista = null;

const calcoloSchermo = document.querySelector(".display");


document.querySelector('.cyber-calculator').addEventListener("click",function(event){
    console.log(event.target.getAttribute("data-obj"));
   
    clickPulsante(event.target.getAttribute("data-obj"));

});

function clickPulsante(value){
    if(isNaN(parseInt(value))){
        aggiungiSimbolo(value);
    }else{
        aggiungiNumero(value);
    }
    risultato();
}

function aggiungiSimbolo(value){
    switch(value){
        case "C":
            carica = "0";
            totaleAdesso = 0;
            operazionePrevista = null;
            break;
        case "=":
            if(operazionePrevista === null){
                return;
            }
            cambioOperazione(parseInt(carica));
            carica = "" + totaleAdesso;
            operazionePrevista = null;
            totaleAdesso = 0;
            break;
         default:
            giocoMatematico(value);
            break;
    }
}


function aggiungiNumero(value){
    if(carica === '0'){
        carica = value;
    }else{
        carica += value;
    }
}


function giocoMatematico(value){
    const calcoloInterno = parseInt(carica);
    if(totaleAdesso === 0){
        totaleAdesso = calcoloInterno;
    }else{
        cambioOperazione(calcoloInterno);
    }
    operazionePrevista = value;

    carica = '0';

}

function cambioOperazione(calcoloInterno){
    if(operazionePrevista === "+"){
        totaleAdesso += calcoloInterno;
    }else if(operazionePrevista === "-"){
        totaleAdesso -= calcoloInterno;
    }else if(operazionePrevista === "x"){
        totaleAdesso *= calcoloInterno;
    }else{
        totaleAdesso /= calcoloInterno;
    }
}

function risultato(){
    calcoloSchermo.value = carica;
}