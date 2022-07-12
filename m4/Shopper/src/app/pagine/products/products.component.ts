import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interface-class/product';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  loading: boolean = true;
  product!: Product;

  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.productService
        .getProductBySlug(params.slug)
        .subscribe((res: Product[]) => {
          this.product = res[0];
          console.log(this.product);
          if (this.product.name != null) {
            this.loading = false;
          }
        });
    });
  }
}
