"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Abbigliamento {
    constructor(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
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
    getsaldocapo() {
        return this.prezzoivainclusa - (this.prezzoivainclusa * (this.saldo / 100));
    }
    getacquistocapo() {
        if (this.quantita > 0) {
            return this.prezzoivainclusa;
        }
        else {
            return null;
        }
    }
}
const URLSITO = 'Abbigliamento.json';
function readAbb() {
    return __awaiter(this, void 0, void 0, function* () {
        let res = yield fetch(URLSITO);
        if (!res.ok) {
            throw new Error("Fatch fallito");
        }
        let r = yield res.json();
        let vestiti = [];
        for (let a in r) {
            let props = [];
            for (let prop in a) {
                props.push(a[prop]);
            }
            let abb = new Abbigliamento(...props);
            vestiti.push(abb);
        }
        return vestiti;
    });
}
readAbb().then(res => {
    for (let x of res) {
        console.log(x.getacquistocapo());
        console.log(x.getsaldocapo());
    }
});
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
//# sourceMappingURL=script.js.map