import { AddressClass } from "./address-class";

export class User {
    firstname!: string;
    lastname!: string;
    email!: string;
    password!: string;
    address!: AddressClass;

    constructor(){
        this.firstname = '';
        this.lastname = '';
        this.email = '';
        this.password = '';
        this.address = new AddressClass();
    }
}
