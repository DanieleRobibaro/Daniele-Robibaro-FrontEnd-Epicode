import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private productService: ProductsService
    ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    
  }

  products: any[] = this.productService.getProductSaved();

  user = this.authService.getLoggedUser();

}
