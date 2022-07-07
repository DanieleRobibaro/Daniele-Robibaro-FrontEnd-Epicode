export interface Product {
    name: string;
    category: string;
    slug: string;
    price: number | string;
    availability: boolean;
    description: string;
    id:number | null
}
