import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Product } from 'src/app/interface-class/product';
import { ProductsClass } from 'src/app/interface-class/products-class';
import { AuthService } from 'src/app/service/auth.service';
import { ProductsService } from 'src/app/service/products.service';
import { ModalCartComponent } from '../../component/modal-cart/modal-cart.component';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  modalRef:NgbActiveModal | null = null;

  constructor(
    private productService: ProductsService,
    private authService: AuthService,
    private modalService: NgbModal,
    // private router: Router
  ) {
    // this.router.routeReuseStrategy.shouldReuseRoute = () => {
    //   return false;
    // };
  }

  products!: Product[];
  loading: boolean = true;

  ngOnInit(): void {
    this.productService.getAll().subscribe((res: Product[]) => {
      this.products = res;
      console.log(this.products);
      console.log(this.products.length);
      if (this.products.length > 0) {
        this.loading = false;
      }
    });
  }

  onSubmit() {}

  user = this.authService.getLoggedUser();

  isUserLogged() {
    return this.authService.isUserLogged();
  }

  product: Product = new ProductsClass();

  addNewProduct() {
    let name = this.product.name;
    this.product.slug = name.replace(/ /g, '-').toLowerCase();
    this.productService.addProduct(this.product).subscribe((res) => {
      console.log(res);
    });
  }

  getAvailability(value: boolean) {
    this.product.availability = value;
  }

  deleteProduct(id: number | null) {
    this.productService.delete(id).subscribe((res: any) => {
      console.log(res);
    });
  }
  updateProduct() {
    this.productService
      .update(this.product.id, this.product)
      .subscribe((res) => {
        console.log(res);
      });
  }
  getOneProduct(id: number | null) {
    this.productService.getProduct(id).subscribe((res: any) => {
      console.log(res);
      this.product = res;
    });
  }
  addToCart(product: Product) {
    this.productService.saveProduct(product);
    // this.router.navigateByUrl('pages/shop/all');
  }
  open(){
    this.modalRef = this.modalService.open(ModalCartComponent);
  }
}
