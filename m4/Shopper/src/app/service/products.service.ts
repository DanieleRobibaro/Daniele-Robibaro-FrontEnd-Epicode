import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../interface-class/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient, private router: Router) { }

  apiUrlProducts:string = 'http://localhost:4201/products'


  addProducts(products:Product){
    return this.http.post(this.apiUrlProducts, products)
  }
  getAll(){
    return this.http.get<Product[]>(this.apiUrlProducts)
  }
  getProduct(id: number | null){
    return this.http.get(this.apiUrlProducts + '/' + id);
  }
  update(id: number | null, products:Product) {
    return this.http.put(this.apiUrlProducts + '/' + id, products);
  }
  delete(id: number | null) {
    return this.http.delete(this.apiUrlProducts + '/' + id);
  }


}