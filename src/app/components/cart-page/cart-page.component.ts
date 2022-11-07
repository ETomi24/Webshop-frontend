import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/models/cart/cart';
import { Order } from 'src/app/models/order/order';
import { Product } from 'src/app/models/product/product';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  order? : Order;

  cartItems : Cart[] = [];
  products : Product[] = [];

  constructor(private cartService : CartService, private orderService : OrderService, 
  private productService : ProductService, private router : Router) { }

  ngOnInit(): void {
    this.order = {
      id : 1,
      totalPrice : 1,
      creationDate : new Date(),
      deliveryDate : new Date,
      status : 0,
      userId : "etomi24"
    }
    this.getAllCartItem();
  }

  getAllCartItem() {
    if(this.order){
      this.cartService.getAll(this.order?.id).subscribe(res => {
        this.cartItems = res;
        console.log(this.cartItems);
        this.cartItems.forEach(element => {
          this.productService.get(element.productId).subscribe(prod => {
            this.products.push(prod);
          })
        });
      });
    }
  }

}
