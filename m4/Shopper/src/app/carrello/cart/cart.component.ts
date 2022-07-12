import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interface-class/product';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  empty: boolean = true;

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    if (this.products.length > 0) {
      this.empty = false;
    }
  }

  products: Product[] = this.productService.getProductSaved();
  
  deleteProductToCart(i: number) {
    this.productService.deleteProductSaved(i);
  }
}
