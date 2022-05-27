class SonAccount{
    
   public balancelnit:number = 0; // saldo attuale 0
  
   public oneDeposit(soldi:number):number {// versamento
        this.balancelnit += soldi;
        return soldi;

   } 
   public oneWithDraw(soldi2:number):number{// prelievo
       this.balancelnit -= soldi2;
       return soldi2;
   } 
   public twoDeposit(soldi3:number):number {// versamento
    this.balancelnit += soldi3;
    return  soldi3;

   } 
   public twoWithDraw(soldi4:number):number {// prelievo
     this.balancelnit -= soldi4;
     return soldi4;
   } 

   public totalBalance():number{
       return this.balancelnit

   }


}
console.log('------------son account----------------- ' + '\n');
// set della proprietÃ  al costruttore
let son = new SonAccount()
console.log(son);
// // stampo i versamenti-prelievi fatti ed il saldo attuale del conto
console.log('First deposit:+' + son.oneDeposit(1000));
console.log('First withdraw:-' + son.oneWithDraw(500));
console.log('Second deposit:+' + son.twoDeposit(1000));
console.log('Second withdraw:-' + son.twoWithDraw(400));
console.log('totalBalance:' + son.totalBalance());


class MotherAccount extends SonAccount{

    private interesse:number = 10;

    private addinterest():number{// interesse MotherAccount 10%


        return (this.balancelnit*(this.interesse/100))
    }
    totalBalance():number{
        let bilancioDisponibilie = this.balancelnit - this.addinterest()
        return bilancioDisponibilie
 
    }
 
  
    
}
let mother = new MotherAccount()
console.log('--------------mother account----------------------------------' + '\n');
console.log(mother);
// // stampo i versamenti-prelievi fatti ed il saldo attuale del conto
console.log('First deposit:+' + mother.oneDeposit(1000));
console.log('First withdraw:-' + mother.oneWithDraw(500));
console.log('Second deposit:+' + mother.twoDeposit(1000));
console.log('Second withdraw:-' + mother.twoWithDraw(400));
console.log('totalBalance:' + mother.totalBalance());