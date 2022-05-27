interface ISmartphone{
    carica:number;
    numeroChiamate:number;
    costoPerMinuto:number;
    ricarica(unaRicarica:number):void;
    chiamata(minutiDurata:number):void;
    numero404():number;
    getNumeroChiamate():number;
    azzeraChiamate():void;
}

class FirstUser implements ISmartphone{
    public carica: number;
    public numeroChiamate: number;
    public costoPerMinuto:number;
    constructor(cr:number, nCmt:number){
        this.carica = cr;
        this.numeroChiamate = nCmt;
        this.costoPerMinuto = 0.20;

    }

    public ricarica(unaRicarica:number): void {
       this.carica = this.carica + unaRicarica
    }
    public chiamata(minutiDurata:number): void {
        if(this.carica > (minutiDurata * this.costoPerMinuto)){
            this.carica = this.carica - ((Math.round((minutiDurata * this.costoPerMinuto)*100))/100);
            this.numeroChiamate++;
        }else{
            console.log('Attenzione non hai abbastanza credito per effettuare la chiamata')
            
        }

    }
    public numero404(): number {
        return this.carica
    }
    public getNumeroChiamate(): number {
       return this.numeroChiamate
    }
    public azzeraChiamate(): void {
        this.numeroChiamate = 0
    }
}
let Mario = new FirstUser(1,0)

console.log(Mario)
console.log('Il tuo credito è di '+ Mario.numero404() + ' €')
Mario.chiamata(10)
Mario.ricarica(10)
console.log('Hai effettuato una ricarica ora il tuo credito è di '+ Mario.numero404() + ' €')
Mario.chiamata(10)
console.log('Hai effettuato una chiamata! Ora il tuo credito residuo è di '+ Mario.numero404() + ' €')
Mario.chiamata(10)
console.log('Hai effettuato una chiamata! Ora il tuo credito residuo è di '+ Mario.numero404() + ' €')
Mario.chiamata(10)
console.log('Hai effettuato una chiamata! Ora il tuo credito residuo è di '+ Mario.numero404() + ' €')
console.log('Hai effettuato '+ Mario.getNumeroChiamate() + ' chiamate')
Mario.azzeraChiamate()


class SecondUser implements ISmartphone{
    public carica: number;
    public numeroChiamate: number;
    public costoPerMinuto:number;
    constructor(cr:number, nCmt:number){
        this.carica = cr;
        this.numeroChiamate = nCmt;
        this.costoPerMinuto = 0.20;

    }

    public ricarica(unaRicarica:number): void {
       this.carica = this.carica + unaRicarica
    }
    public chiamata(minutiDurata:number): void {
        this.carica = this.carica -  ((Math.round((minutiDurata * this.costoPerMinuto)*100))/100);
        this.numeroChiamate++;
    }
    public numero404(): number {
        return this.carica
    }
    public getNumeroChiamate(): number {
       return this.numeroChiamate
    }
    public azzeraChiamate(): void {
        this.numeroChiamate = 0
    }
}
let Marta = new SecondUser(5,0)
console.log(Marta)
console.log('Il tuo credito è di '+ Marta.numero404() + ' €')
Marta.ricarica(10)
console.log('Hai effettuato una ricarica ora il tuo credito è di '+ Marta.numero404() + ' €')
Marta.chiamata(5.43)
console.log('Hai effettuato una chiamata! Ora il tuo credito residuo è di '+ Marta.numero404() + ' €')
Marta.chiamata(0.98)
console.log('Hai effettuato una chiamata! Ora il tuo credito residuo è di '+ Marta.numero404() + ' €')
console.log('Hai effettuato '+ Marta.getNumeroChiamate() + ' chiamate')
Marta.azzeraChiamate()



class ThirdUser implements ISmartphone{
    public carica: number;
    public numeroChiamate: number;
    public costoPerMinuto:number;
    constructor(cr:number, nCmt:number){
        this.carica = cr;
        this.numeroChiamate = nCmt;
        this.costoPerMinuto = 0.20;

    }

    public ricarica(unaRicarica:number): void {
       this.carica = this.carica + unaRicarica
    }
    public chiamata(minutiDurata:number): void {
        this.carica = this.carica - ((Math.round((minutiDurata * this.costoPerMinuto)*100))/100);
        this.numeroChiamate++;
    }
    public numero404(): number {
        return  this.carica
    }
    public getNumeroChiamate(): number {
       return this.numeroChiamate
    }
    public azzeraChiamate(): void {
        this.numeroChiamate = 0
    }
}
let Franco = new ThirdUser(25,0)

console.log(Franco)
console.log('Il tuo credito è di '+ Franco.numero404() + ' €')
Franco.ricarica(10)
console.log('Hai effettuato una ricarica ora il tuo credito è di '+ Franco.numero404()   + ' €')
Franco.chiamata(1.73)
console.log('Hai effettuato una chiamata! Ora il tuo credito residuo è di '+ Franco.numero404() + ' €')
Franco.chiamata(6.49)
console.log('Hai effettuato una chiamata! Ora il tuo credito residuo è di '+ Franco.numero404() + ' €')
Franco.chiamata(3.17)
console.log('Hai effettuato una chiamata! Ora il tuo credito residuo è di '+ Franco.numero404() + ' €')
Franco.chiamata(10)
console.log('Hai effettuato una chiamata! Ora il tuo credito residuo è di '+ Franco.numero404() + ' €')
console.log('Hai effettuato '+ Franco.getNumeroChiamate() + ' chiamate')
Franco.azzeraChiamate()




