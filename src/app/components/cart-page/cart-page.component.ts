import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/models/cart/cart';
import { CartItem } from 'src/app/models/cart/cartItem';
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

  carts : Cart[] = [];
  cartItems : CartItem[] = [];

  constructor(private cartService : CartService, private orderService : OrderService, 
  private productService : ProductService, private router : Router) { }

  ngOnInit(): void {
    this.order = {
      id : 152,
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
        this.carts = res;
        console.log(this.carts);
        this.carts.forEach(element => {
          this.productService.get(element.productId).subscribe(prod => {
            let cartItem : CartItem = {
                product : prod,
                quantity : element.quantity
            }
            console.log(cartItem);
            this.cartItems.push(cartItem);
          })
        });
      });
    }
  }

  removeFromCart(cartItem : CartItem) {
    if(this.order && cartItem.product.id){
      this.cartService.removeFromCart(cartItem.product.id, this.order.id, cartItem.quantity).subscribe(res => console.log(res))
      //window.location.reload();
    }
  }

  getCartItemTotalPrice(cartItem : CartItem) : any {
    if(cartItem.product.price){
      return cartItem.quantity * cartItem.product.price;
    } else {
      return undefined;
    }
  }

  completeOrder() {
    
  }
}
