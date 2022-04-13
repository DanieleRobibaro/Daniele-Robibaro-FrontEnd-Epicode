function cambiaSfondo(e){
    console.log(e);

    let colore = e.getAttribute('data-colore');
    console.log(colore);

    if(e.style.backgroundColor == ''){
        e.style.backgroundColor = colore;
    }else{
        e.style.backgroundColor = '';
    }

}
function cambiaTesto(x){
    console.log(x);

    let testo = x.getAttribute('data-testo');
    console.log(testo);

    if(x.style.color == ''){
        x.style.color = testo;
    }else{
        x.style.color = '';
    }

}