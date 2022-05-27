"use strict";
class SonAccount {
    constructor() {
        this.balancelnit = 0; // saldo attuale 0
    }
    oneDeposit(soldi) {
        this.balancelnit += soldi;
        return soldi;
    }
    oneWithDraw(soldi2) {
        this.balancelnit -= soldi2;
        return soldi2;
    }
    twoDeposit(soldi3) {
        this.balancelnit += soldi3;
        return soldi3;
    }
    twoWithDraw(soldi4) {
        this.balancelnit -= soldi4;
        return soldi4;
    }
    totalBalance() {
        return this.balancelnit;
    }
}
console.log('------------son account----------------- ' + '\n');
// set della proprietÃ  al costruttore
let son = new SonAccount();
console.log(son);
// // stampo i versamenti-prelievi fatti ed il saldo attuale del conto
console.log('First deposit:+' + son.oneDeposit(1000));
console.log('First withdraw:-' + son.oneWithDraw(500));
console.log('Second deposit:+' + son.twoDeposit(1000));
console.log('Second withdraw:-' + son.twoWithDraw(400));
console.log('totalBalance:' + son.totalBalance());
class MotherAccount extends SonAccount {
    constructor() {
        super(...arguments);
        this.interesse = 10;
    }
    addinterest() {
        return (this.balancelnit * (this.interesse / 100));
    }
    totalBalance() {
        let bilancioDisponibilie = this.balancelnit - this.addinterest();
        return bilancioDisponibilie;
    }
}
let mother = new MotherAccount();
console.log('--------------mother account----------------------------------' + '\n');
console.log(mother);
// // stampo i versamenti-prelievi fatti ed il saldo attuale del conto
console.log('First deposit:+' + mother.oneDeposit(1000));
console.log('First withdraw:-' + mother.oneWithDraw(500));
console.log('Second deposit:+' + mother.twoDeposit(1000));
console.log('Second withdraw:-' + mother.twoWithDraw(400));
console.log('totalBalance:' + mother.totalBalance());
//# sourceMappingURL=script.js.map