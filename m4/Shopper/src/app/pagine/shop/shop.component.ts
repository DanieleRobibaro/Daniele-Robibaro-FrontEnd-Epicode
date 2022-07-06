import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interface-class/product';
import { ProductsClass } from 'src/app/interface-class/products-class';
import { User } from 'src/app/interface-class/user';
import { AuthService } from 'src/app/service/auth.service';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  constructor(
    private productService: ProductsService,
    private authService: AuthService
  ) {}

  products!: Product[];

  ngOnInit(): void {
    this.productService.getAll().subscribe((res:Product[]) => {
      this.products = res
    })
  }

  onSubmit() {}
  
  user = this.authService.getLoggedUser();
  
  isUserLogged() {
    return this.authService.isUserLogged();
  }
  
  product: Product = new ProductsClass();
  

  
  addNewProduct() {
    this.productService.addProducts(this.product).subscribe((res) => {
      console.log(res);
    });
  }

  getAvailability(value: boolean) {
    this.product.availability = value;
  }

  deleteProduct(){
    this.productService.delete(this.product)
  }
}
