import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product? : Product;
  quantity : number = 0;

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let id = params['id'];
      if (id) {
        this.getProduct(id);
      }
    })
  }

  getProduct(id: number) {
    this.productService.get(id).subscribe(res => {
      this.product = res;
    });
  }

  getImage() : any {
    if(this.product?.picture) {
      return 'data:image/jpeg;base64,' + this.product.picture;
    } else {
      return 'https://via.placeholder.com/550x450';
    }
  }

  putInCart() {
    
  }
}
