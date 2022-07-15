import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../interface-class/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient, private router: Router) {}

  apiUrlProducts: string = 'http://localhost:4201/products';
  ProductItemKey: string = 'product';
  products: Product[] = [];
  ProductsArreyKey: string = 'products';

  addProduct(product: Product) {
    return this.http.post(this.apiUrlProducts, product);
  }
  getAll() {
    return this.http.get<Product[]>(this.apiUrlProducts);
  }
  getProduct(id: number | null) {
    return this.http.get(this.apiUrlProducts + '/' + id);
  }
  update(id: number | null, product: Product) {
    return this.http.put(this.apiUrlProducts + '/' + id, product);
  }
  delete(id: number | null) {
    return this.http.delete(this.apiUrlProducts + '/' + id);
  }
  getProductBySlug(slug: string) {
    return this.http.get<Product[]>(this.apiUrlProducts + '?slug=' + slug);
  }
  saveProduct(product: Product) {
    localStorage.setItem(this.ProductItemKey, JSON.stringify(product));
    this.products.push(product);
    localStorage.setItem(this.ProductsArreyKey, JSON.stringify(this.products));
  }

  getProductSaved() {
    let product = JSON.parse(localStorage.getItem(this.ProductsArreyKey) || '[]');
    if(product.length > 0) {
      product = product.reduce((p:any, item:any) => {
       
        (p[item.id]=p[item.id] || []).push(item)
        return p

      },{})
    }
    // product = Object.keys(product).map(key => product[key])
    
    console.log(product)
    return product;
  }

  deleteProductSaved(i: number) {
    localStorage.removeItem(this.ProductItemKey);
    this.products.splice(i, 1);
    localStorage.setItem(this.ProductsArreyKey, JSON.stringify(this.products));
  }
  deleteAll() {
    localStorage.removeItem(this.ProductItemKey)
    localStorage.removeItem(this.ProductsArreyKey)
  }
}
