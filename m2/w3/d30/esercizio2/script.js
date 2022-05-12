class Paginazione{
    constructor(items =[], pageSize = 10){
       this.contenuti = items;
       this.dimensione = pageSize;

       this.currentPage = 1
       this.pagineMassime = Math.ceil(this.contenuti.length / this.dimensione)

    }
    getVisibleItems(){
        let corpo = document.querySelector('#corpo')
        corpo.innerHTML = ''

        forEach(corpo =>{
            
            corpo.innerHTML += `<tr><td>${corpo.id}</td><td>${corpo.nome}</td><td>${corpo.cognome}</td><td>${corpo.classe}</td></tr>`;
        })

        
        
    }
}

let user = [
    {id: 1, nome: 'Marco', cognome:'Rossi'},
    {id: 2, nome: 'Marco', cognome:'Rossi'},
    {id: 3, nome: 'Marco', cognome:'Rossi'},
    {id: 4, nome: 'Marco', cognome:'Rossi'},
    {id: 5, nome: 'Marco', cognome:'Rossi'},
    {id: 6, nome: 'Marco', cognome:'Rossi'},
    {id: 7, nome: 'Marco', cognome:'Rossi'},
    {id: 8, nome: 'Marco', cognome:'Rossi'}
]

let p = new Paginazione(user, 2);