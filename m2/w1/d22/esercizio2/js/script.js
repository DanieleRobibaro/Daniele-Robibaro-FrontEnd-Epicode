//gestione della lista

let lista = document.querySelectorAll('li');

for (var i = 0; i < lista.length; i++) {

    lista[i].addEventListener('mouseover', function() {
        this.classList.add('selezione');
    });

    lista[i].addEventListener('mouseout', function() {
        this.classList.remove('selezione');
    });

    lista[i].addEventListener('click', function() {
        this.classList.toggle('fatto');
    });
}


//Menu dropdown

function toggleMenu() {
    document.getElementById('btn-panel').classList.toggle('mostra');

}