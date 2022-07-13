import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/service/auth.service';
import { ProductsService } from 'src/app/service/products.service';
import { ModalCartComponent } from '../modal-cart/modal-cart.component';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  modalRef:NgbActiveModal | null = null;
  empty: boolean = true;

  constructor(
    private authService: AuthService, 
    private modalService: NgbModal,
    private productService: ProductsService) { }

  products: any[] = this.productService.getProductSaved();

  ngOnInit(): void {
    if (this.products.length == 0) {
      this.empty = false;
    }
  }
  isCollapsed = true;

  isUserLogged(){
    return this.authService.isUserLogged();
  }
  open(){
    this.modalRef = this.modalService.open(ModalCartComponent);
  }
}


