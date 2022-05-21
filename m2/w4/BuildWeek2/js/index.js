
let table = document.querySelector("#users")
table.classList.add("table")
table.classList.add("table-hover")

let tHead = document.createElement("thead");
tHead.classList.add("table-dark")
let tBody = document.createElement("tbody");
tBody.setAttribute("id", "tabella");
let tFoot = document.createElement("tfoot");


const APPURL = 'https://jsonplaceholder.typicode.com/users'



fetch (APPURL)
.then(res => res.json())
.then(res => {

/**
 * ****** CREAZIONE TABELLA ******
 */
    let fieldDisplayed = [
        "id",
        "name",
        "username",
        "email"
    ]

    let trHead = document.createElement("tr");
    for(field of fieldDisplayed){
        let th = document.createElement("th")
        th.innerHTML = field;
        trHead.append(th)
    }
    let thBtn = document.createElement('th')
    let create = document.createElement('button')
    create.innerHTML = 'Aggiungi un nuovo utente'
    create.classList.add("btn")
    create.classList.add("btn-success")

/**
 * ****** CREAZIONE NUOVO UTENTE ******
 */

    create.addEventListener('click', function(){

        let form = document.querySelector("#Form")
        form.innerHTML = ''
        form.classList.add("bg-light")

        let titolo = document.createElement('h1')
        titolo.innerHTML = 'Crea Nuovo Utente'

        titolo.style.color = "green"
        titolo.style.fontFamily = "Brush Script Std"
        titolo.style.textAlign = "left"
        


        let nome = document.createElement('h5')
        nome.innerHTML = 'Nome'

        nome.style.color = "green"
        nome.style.fontFamily = "Apple Chancery"
        
        let input1 = document.createElement('input')
        input1.setAttribute("type", "text");
        input1.setAttribute("id","nome");
        input1.setAttribute("placeholder", "inserisci nome");
        input1.style.fontFamily = "papyrus"

        let username = document.createElement('h5')
        username.innerHTML = 'Username'

        username.style.color = "green"
        username.style.fontFamily = "Apple Chancery"

        let input2 = document.createElement('input')
        input2.setAttribute("type", "text");
        input2.setAttribute("id","username");
        input2.setAttribute("placeholder", "inserisci username")
        input2.style.fontFamily = "papyrus"

        let email = document.createElement('h5')
        email.innerHTML = 'Email'

        email.style.color = "green"
        email.style.fontFamily = "Apple Chancery"

        let input3 = document.createElement('input')
        input3.setAttribute("type", "text");
        input3.setAttribute("id","email");
        input3.setAttribute("placeholder", "inserisci email")
        input3.style.fontFamily = "papyrus"

        let bottone = document.createElement('button')
       
        bottone.classList.add("btn")
        bottone.classList.add("btn-success")
        bottone.classList.add("mt-2")
        bottone.classList.add("p-1")
        bottone.innerHTML = "Aggiungi"
        
        form.append(titolo)
        titolo.append(nome, input1, username, input2, email, input3,bottone)
        
        bottone.classList.add("d-block")
    

        bottone.addEventListener('click', function(){
            
            let nome = document.querySelector('#nome')
            let username = document.querySelector('#username')
            let email = document.querySelector('#email')


            let person = {
                nome: nome.value,
                username: username.value,
                email: email.value,
                
            }
            

            
            let valid = true
            if(nome.value == '' || username.value == '' || email.value == '' || !email.value.includes('.') || !email.value.includes('@')){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Dati non validi. Devi completare tutti i campi con caratteri validi',
                  })
                valid = false;

            }


            if(valid){
            
            fetch(APPURL, {
                method: 'POST',
                body: JSON.stringify(person),
                headers: { 'Content-type': 'Application/json'}
            })
            .then(res => res.json().then(data => ({
                body: data,
                ok: res.ok

            })))
            .then(res => {
                let dati = res.body;
                if(res.ok){

                    Swal.fire({
                        icon: 'success',
                        title: 'Utente creato',
                        html: `è stato creato il nuovo utente ${dati.nome} ${dati.username} con id ${dati.id}`
                    })
                    input1.value = ''
                    input2.value = ''
                    input3.value = ''
                }
                form.innerHTML = ''
                
            })
            }
        })


    })


    thBtn.append(create)
    trHead.append(thBtn)
    tHead.append(trHead);
    table.append(tHead);
    table.append(tBody)

/**
 * ****** CREAZIONE TABELLA ******
 */

 let arrTr = []
 console.log(arrTr)
    for(let user of res){
        let tr = document.createElement('tr')
        
        for(prop in user) {
            if(fieldDisplayed.includes(prop)) {
                let key = prop;
                let value = user[prop];
                if(key === ""){
                    let td = document.createElement("td")
                    td.innerHTML = `<img class="rounded-circle" src=" ${value} ">`
                    
                    tr.append(td);
                }else {
                    let td = document.createElement("td")
                    td.innerHTML = value;
                    
                    tr.append(td);
                }
            }
        }
        let btn = document.createElement('td')
        let view = document.createElement('button')

        let img = document.createElement('img')
        img.src = 'img/usericon.png' 

        img.style.height = '100px'
        img.style.weight = '100px'


/**
 * ****** FUNZIONE VISUALIZZA ******
 */
        view.innerHTML = 'Visualizza'
        view.classList.add("btn")
        view.classList.add("btn-info")
        view.setAttribute("type", "button");

        view.addEventListener('click', function(){
            let form = document.querySelector('#Form')
            form.innerHTML = ''

            form.append(createCard(user))
    })

       
            
/**
 * ****** FUNZIONE MODIFICA******
 */
        let mod = document.createElement('button')
        mod.innerHTML = 'Modifica'
        mod.classList.add("btn")
        mod.classList.add("btn-warning")
        mod.setAttribute("type", "button");
        mod.addEventListener("click", function(){
         

            let form = document.querySelector("#Form")
            form.innerHTML = ''
            form.classList.add("bg-light")

            let titolo = document.createElement('h1')
            titolo.innerHTML = 'Modifica utente'
            titolo.classList.add("text-warning")
            titolo.style.fontFamily = "Brush Script Std"
            titolo.style.textAlign = "left"
    
            let nome = document.createElement('h5')
            nome.innerHTML = 'Nome'
            nome.style.fontFamily = "Apple Chancery"
    
            let input1 = document.createElement('input')
            input1.setAttribute("type", "text");
            input1.setAttribute("id","nome");
            input1.style.fontFamily = "papyrus"
    
            let username = document.createElement('h5')
            username.innerHTML = 'Username'
            username.style.fontFamily = "Apple Chancery"
    
            let input2 = document.createElement('input')
            input2.setAttribute("type", "text");
            input2.setAttribute("id","username");
            input2.style.fontFamily = "papyrus"
    
            let email = document.createElement('h5')
            email.innerHTML = 'Email'
            email.style.fontFamily = "Apple Chancery"
    
            let input3 = document.createElement('input')
            input3.setAttribute("type", "text");
            input3.setAttribute("id","email");
            input3.style.fontFamily = "papyrus"
    
            let bottone = document.createElement('button')
            bottone.classList.add("btn")
            bottone.classList.add("btn-warning")
            bottone.classList.add("mt-2")
            bottone.classList.add("p-1")
            bottone.classList.add("d-block")
            bottone.innerHTML = "Modifica"
    
            form.append(titolo)
            titolo.append(nome, input1, username, input2, email, input3, bottone)


            
            fetch(APPURL)
            .then(res => res.json())
            .then(res => {
                
                let nome = document.querySelector('#nome')
                let username = document.querySelector('#username')
                let email = document.querySelector('#email')

                
                nome.value = res[user.id-1].name
                username.value = res[user.id-1].username
                email.value = res[user.id-1].email
                
            })
            
            bottone.addEventListener('click', function(){
                
                
                let nome = document.querySelector('#nome')
                let username = document.querySelector('#username')
                let email = document.querySelector('#email')
                
                
                let person = {
                    nome: nome.value,
                    username: username.value,
                    email: email.value,
                    
                }
                
                let valid = true
            if(nome.value == '' || email.value == '' || username.value == '' || !email.value.includes('@')){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Dati non validi. Devi completare tutti i campi con caratteri validi',
                  })
                valid = false;

            }
           

            if(valid){
                
                fetch(APPURL+"/"+ user.id, {
                    method: 'PATCH',
                    body: JSON.stringify(person),
                    headers: { 'Content-type': 'Application/json'}
                }) 
                .then(res => res.json().then(data => ({
                    body: data,
                    ok: res.ok
                    
                })))
                .then(res => {
                    let dati = res.body;
                    if(res.ok){
                        Swal.fire({
                            icon: 'success',
                            title: 'Utente modificato',
                            html: `è stato modificato utente ${dati.nome} ${dati.username} con id ${dati.id}`,
                        })
                        input1.value = ''
                        input2.value = ''
                        input3.value = ''
                    }
                    form.innerHTML = ''
                    
                })
                }
            })
            
            
        })
        
        /**
         * ****** FUNZIONE ELIMINA ******
         */
        
        let del = document.createElement('button')
        del.innerHTML = 'Elimina'
        del.classList.add("btn")
        del.classList.add("btn-danger")
        del.setAttribute("type", "button");

        del.addEventListener('click', function(){
            let form = document.querySelector("#Form")
            form.innerHTML = ''

            Swal.fire({
                title: 'Sei sicuro?',
                text: "Non sarà possibile tornare indietro",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si'
            }).then((result) => {
                if (result.isConfirmed) {
                    fetch(APPURL +"/"+ user.id, {
                        method: 'DELETE'
                        
                    })
                  Swal.fire(
                    'Eliminato!',
                    'Il file eliminato',
                    'success'
                  )
                }
              })
            
            }) 
            
            btn.append(view, mod, del)
            tr.append(btn)
            arrTr.push(tr)
           
        
    } 

    /***
     * *******PAGINAZIONE*********
     */
    
    


    let trFoot = document.createElement("tr");
    let tdPrimo = document.createElement("td")
    let tdUltimo = document.createElement("td")
    let tdPrecedente = document.createElement("td")
    let tdSuccessivo = document.createElement("td")
    let tdForm = document.createElement("td")

    let primo = document.createElement('a');
    primo.setAttribute('id', 'primo');
    primo.setAttribute('href','#')
    primo.classList.add('btn', 'btn-outline-success')
    primo.innerHTML = 'Primo'
    primo.addEventListener('click', function () {
        p.firstPage()
    })
    let ultimo = document.createElement('a');
    ultimo.setAttribute('id', 'ultimo');
    ultimo.setAttribute('href','#')
    ultimo.classList.add('btn', 'btn-outline-success')
    ultimo.innerHTML = 'ultimo'
    ultimo.addEventListener('click', function () {
        p.lastPage()
    })
    let precedente = document.createElement('a');
    precedente.setAttribute('id', 'precedente');
    precedente.setAttribute('href','#')
    precedente.classList.add('btn', 'btn-outline-dark')
    precedente.innerHTML = 'precedente'
    precedente.addEventListener('click', function () {
        p.prevPage()
    })
    let successivo = document.createElement('a');
    successivo.setAttribute('id', 'successivo');
    successivo.setAttribute('href','#')
    successivo.classList.add('btn', 'btn-outline-dark')
    successivo.innerHTML = 'successivo'
    successivo.addEventListener('click', function () {
        p.nextPage()
    })

    tdPrimo.append(primo)
    tdUltimo.append(ultimo)
    tdPrecedente.append(precedente)
    tdSuccessivo.append(successivo)
    trFoot.append(tdPrimo, tdPrecedente, tdSuccessivo, tdUltimo, tdForm)
    tFoot.append(trFoot)
    table.append(tFoot)
    
    for (let i = 0; i < 3; i++) {
        let div = document.createElement("div")
        div.classList.add("form-check", "form-check-inline")
        let input = document.createElement("input")
        input.classList.add("form-check-input")
        input.setAttribute("type", "radio")
        input.setAttribute("id", "inlineRadio"+ i)
        input.setAttribute("name", "inlineRadioOptions")
        let label = document.createElement("label")
        label.classList.add("form-check-label")
        label.setAttribute("for", "inlineRadio")
        label.setAttribute("id", "lab"+i)
        

        div.append(input, label)
        tdForm.append(div)
    }


    let numero2 = document.querySelector("#lab0")
    let numero5 = document.querySelector("#lab1")
    let numero10 = document.querySelector("#lab2")
    

    numero2.innerHTML = "2"
    numero5.innerHTML = "5"
    numero10.innerHTML = "10"

        let input2 = document.querySelector("#inlineRadio0")
        let input5 = document.querySelector("#inlineRadio1")
        let input10 = document.querySelector("#inlineRadio2")
        input10.setAttribute("checked", "")

       
        let p = new Paginazione(arrTr, 10)

        input2.addEventListener("click", function() {
            p = new Paginazione(arrTr,2)
        })
        input5.addEventListener("click", function() {
            p = new Paginazione(arrTr,5)
        })
        input10.addEventListener("click", function() {
            p = new Paginazione(arrTr,10)
        })

       

})

/***
 * *****BARRA DI RICERCA****
 */
let input = document.querySelector('#search')
let ul = document.querySelector('#peopleList')
let filter = input.value.toLowerCase()
for (i=0; i <= 10; i++) {
    var li = document.createElement('li')
    ul.append(li)
}
fetch("https://jsonplaceholder.typicode.com/users/")
    .then(res => res.json())
    .then(res => {
        let righe = ul.querySelectorAll("li")
        // for(people of res){
        //     let c = createCard(people)
        //     righe[i].append(c)
        //     i++
        // }
        for([index, value] of res.entries()){
            let c = createCard(value)
            c.dataset.idcard = value.id
            c.dataset.namecard = value.name
            c.dataset.usernamecard = value.username
            righe[index].append(c)
        }
})
input.addEventListener("input", function(e){
    let ricerca = this.value
    if(ricerca = ''){
        v.classList.remove("visible")
    }
    let cards = document.querySelectorAll("li .card")
    cards.forEach(function(v,i){
        console.log(i,v)
        if(v.dataset.namecard.toUpperCase().includes(ricerca)|| v.dataset.idcard.includes(ricerca)|| v.dataset.usernamecard.includes(ricerca)){
            v.classList.add("visible")
        }else{
            v.classList.remove("visible")
        }
    })
})






        /***
         * **********CREAZIONE CARD *************
         */
        
         function createCard(us){
            let card = document.createElement('div')
            card.classList.add('card', 'text-dark', 'bg-light', 'mb-3')
            
            let cardHeader = document.createElement('div')
            cardHeader.classList.add('card-header')
            
            let cardBody = document.createElement('div')
            cardBody.classList.add('card-body')
            
            let cardText = document.createElement('p')
            cardText.classList.add('card-text')
            
            let img = document.createElement('img')
            img.src = 'img/usericon.png' 
            
            img.style.height = '100px'
            img.style.weight = '100px'
            
            cardHeader.innerHTML = us.name
            cardText.innerHTML = 'Username: ' + us.username + '<br>' + 'Email: ' + us.email + '<br>' + 'Address: ' + us.address.street + ', '+ us.address.suite + ', ' + us.address.city 
            cardBody.append(img, cardText)
            card.append(cardHeader, cardBody)
            return card
        }


