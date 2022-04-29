function iniziaShopping() {

    let budget = 1000;
    let compere = 0;

    while (budget >= 0) {

        let prezzi = Math.floor(Math.random() * 80);

        if (prezzi < budget) {
            compere += 1;
            budget -= prezzi;

            document.getElementById('mio_budget').innerHTML += '<p> Ammontare della spesa: € ' + prezzi + '<br>Nuovo budget aggiornato: € ' + budget + '<p>';
        }

        if (budget > 450 && budget <= 500) {
            
            document.getElementById('mio_budget').innerHTML += ' HAI GIà SPESO METà DELL BUDGET!!! ';
            
        }

        if (budget > 150 && budget < 200) {
        
            document.getElementById('mio_budget').innerHTML += ' SEI SOTTO I 200 DOVRESTI FERMARTI!!!  ';
            
        }

        if(prezzi == budget){
            compere += 1;
            budget -= prezzi;

            document.getElementById('mio_budget').innerHTML += '<p> Ammontare della spesa: € ' + prezzi + '<br>Nuovo budget aggiornato: € ' + budget + '<p>';
            document.getElementById('mio_budget').innerHTML += '<p> HAI SPESO TUTTO!!! <p>';
            break;

        }

    }

    document.getElementById('mio_budget').innerHTML += '<p>Hai acquistato: ' + compere + ' oggetti </p>';

}