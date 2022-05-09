class Pratica{
    constructor(id_div1, id_div2){
        this.campo1 = document.querySelector(id_div1)
        this.campo2 = document.querySelector(id_div2)
        this.testo1
        this.testo2
        this.data
        this.bottone
        this.eta
        this.creoHTMLcompila()
        
        this.bottone.addEventListener("click",() =>{
            this.calcolaEta()
            this.creoHTMLleggi()
        })


    }
    creoHTMLcompila(){
        let input1 = document.createElement('input')
        input1.type = 'text'
        input1.placeholder = 'Nome'
        input1.classList.add('form-control')

        this.testo1 = input1

        let input2 = document.createElement('input')
        input2.type = 'text'
        input2.placeholder = 'Cognome'
        input2.classList.add('form-control')

        this.testo2 = input2

        let input3 = document.createElement('input')
        input3.type = 'date'

        this.data = input3

        let button = document.createElement('button')
        button.innerHTML = 'Add'
        button.classList.add('btn','btn-success')

        this.bottone = button

        this.campo1.append(input1, input2, input3, button)

        
    }

    calcolaEta(){
        let userdata = this.data.value
        
        let dob = new Date(userdata)
        
        let diffMesi = Date.now()-dob.getTime()
       
        let diffEta = new Date(diffMesi)
        
        let anni = diffEta.getUTCFullYear()
        
        let etaFinale = Math.abs(anni - 1970)
        
       
        return this.eta = etaFinale 
    }
    
    creoHTMLleggi(){
        let divNome = document.createElement('div')
        divNome.innerHTML = this.testo1.value +' ' +this.testo2.value
        divNome.classList.add('col-8')

        

        let divEta = document.createElement('div')
        divEta.innerHTML = this.eta
        divEta.classList.add('col-4')

       

        this.campo2.append(divNome, divEta)
        this.testo1.value = ''
        this.testo2.value = ''
        this.data.value = ''
    }

}

let esercizio = new Pratica('#compila', '#leggi')
