class Abbigliamento{
    public id:number;
    public codprod:number;
    public collezione:string;
    public capo:string;
    public modello:number;
    public quantita:number;
    public colore:string;
    public prezzoivaesclusa:number;
    public prezzoivainclusa:number;
    public disponibile:string;
    public saldo:number;
    
    constructor(id:number, codprod:number, collezione:string, capo:string, modello:number,quantita:number, colore:string, prezzoivaesclusa:number, prezzoivainclusa:number, disponibile:string, saldo:number){

        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }

    getsaldocapo():number{
        return this.prezzoivainclusa -(this.prezzoivainclusa * (this.saldo / 100))

        
    } 
    getacquistocapo():number|null {
        if(this.quantita > 0){
            return this.prezzoivainclusa
        }else{
            return null
        }
    }
}


const URLSITO:string = 'Abbigliamento.json'

async function readAbb(){
    let res = await fetch(URLSITO)
    if(!res.ok){
        throw new Error("Fatch fallito")
    }
    let r = await res.json();

    let vestiti:Abbigliamento[] = []
    for(let a in r){
        let props:any[] = []
        for(let prop in a){
            props.push(a[prop])
        }
        let abb = new Abbigliamento(...props)
        
        vestiti.push(abb)
    }
    return vestiti
}

readAbb().then(res =>{

    for(let x of res){
                console.log(x.getacquistocapo());
                console.log(x.getsaldocapo());
    }
})

// fetch(URLSITO)
// .then(res => res.json())
// .then(res => {

//     console.log(res)
//    let vestiti:Abbigliamento[] = []
//     for(let a in res){
//         let props = []
//         for(let prop in a){
//             props.push(a[prop])
//         }
//         let abb = new Abbigliamento(...props)
        
//         vestiti.push(abb)

//     }
//     console.log(vestiti)

//     for(let x of vestiti){
//         console.log(x.getacquistocapo());
//         console.log(x.getsaldocapo());
//     }


// })