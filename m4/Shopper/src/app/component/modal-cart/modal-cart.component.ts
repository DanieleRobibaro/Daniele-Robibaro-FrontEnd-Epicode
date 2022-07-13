import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Product } from 'src/app/interface-class/product';
import { AuthService } from 'src/app/service/auth.service';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-modal-cart',
  templateUrl: './modal-cart.component.html',
  styleUrls: ['./modal-cart.component.scss'],
})
export class ModalCartComponent implements OnInit {
  empty: boolean = false;
  constructor(
    public activeModal: NgbActiveModal,
    private productService: ProductsService,
    private authService: AuthService
  ) {}

  products: any[] = this.productService.getProductSaved();

  ngOnInit(): void {
    if (this.products.length == 0) {
      this.empty = true;
    }
  }
  user = this.authService.getLoggedUser();

  isUserLogged() {
    return this.authService.isUserLogged();
  }


  deleteProductToCart(i: number) {
    this.productService.deleteProductSaved(i);
  }
}
