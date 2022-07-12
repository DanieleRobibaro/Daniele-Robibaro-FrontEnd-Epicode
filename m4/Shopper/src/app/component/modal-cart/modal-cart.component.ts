import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Product } from 'src/app/interface-class/product';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-modal-cart',
  templateUrl: './modal-cart.component.html',
  styleUrls: ['./modal-cart.component.scss'],
})
export class ModalCartComponent implements OnInit {
  empty: boolean = true;
  constructor(
    public activeModal: NgbActiveModal,
    private productService: ProductsService
  ) {}

  ngOnInit(): void {
    if (this.products.length > 0) {
      this.empty = false;
    }
  }

  products: any[] = this.productService.getProductSaved();

  deleteProductToCart(i: number) {
    this.productService.deleteProductSaved(i);
  }
}
