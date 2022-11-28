import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product?: Product;
  quantity: number = 0;

  constructor(private productService: ProductService, private cartService: CartService, private route: ActivatedRoute, private router: Router,
    private storageService: StorageService) { }

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

  getImage(): any {
    if (this.product?.picture) {
      return 'data:image/jpeg;base64,' + this.product.picture;
    } else {
      return 'https://via.placeholder.com/550x450';
    }
  }

  putInCart() {
    if (this.product?.quantity && this.product?.price && this.product?.id) {
      if (this.quantity >= 0 && this.quantity <= this.product?.quantity) {
        let orderId = this.storageService.getOrderId();
        this.cartService.addToCart(this.product.id, Number(orderId), this.quantity).subscribe({
          next: data => {
            console.log(data);
            window.location.reload();
          },
          error: err => {
            console.log(err)
          }
        })
      }
    }
  }

  totalPrice(): any {
    if (this.product?.quantity && this.product?.price) {
      if (this.quantity >= 0 && this.quantity <= this.product?.quantity) {
        return this.quantity * this.product.price;
      }
    }
  }
}
