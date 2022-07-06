import { Product } from "./product";

export class ProductsClass implements Product{
    name: string;
    category: string;
    slug: string;
    price: number | string;
    availability: boolean;
    description: string;

    constructor(){
        this.name = "";
        this.category = "";
        this.slug = "";
        this.price = '';
        this.availability = true;
        this.description = "";
    }
}
