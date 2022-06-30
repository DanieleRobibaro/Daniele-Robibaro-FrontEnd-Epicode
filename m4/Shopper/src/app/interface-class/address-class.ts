import { Address } from "./address";


export class AddressClass implements Address{
    State!: string;
    Country!:string;
    City!:string;
    ZipCode!:number | string;
    Street!:string

    constructor(){
        this.State = "";
        this.Country = "";
        this.City = "";
        this.ZipCode = "";
        this.Street = "";
    
    }
}
