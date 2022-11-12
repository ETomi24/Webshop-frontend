import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/models/cart/cart';
import { CartItem } from 'src/app/models/cart/cartItem';
import { Order } from 'src/app/models/order/order';
import { OrderUpdateRequest } from 'src/app/models/order/orderUpdateRequest';
import { Product } from 'src/app/models/product/product';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';
import { ProductService } from 'src/app/services/product.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  order? : Order;
  totalPrice : number = 0;

  carts : Cart[] = [];
  cartItems : CartItem[] = [];

  constructor(private cartService : CartService, private orderService : OrderService, 
  private productService : ProductService, private router : Router, private storageService : StorageService) { }

  ngOnInit(): void {
    this.getOrder();
  }

  getOrder() {
    let orderId = this.storageService.getOrderId();
    this.orderService.get(orderId).subscribe({
      next: data =>{
        this.order = data;
        this.getAllCartItem();
      }
    });
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
            this.totalPrice += this.getCartItemTotalPrice(cartItem);
          })
        });
      });
    }
  }

  removeFromCart(cartItem : CartItem) {
    if(this.order && cartItem.product.id){
      this.cartService.removeFromCart(cartItem.product.id, this.order.id, cartItem.quantity).subscribe({
        next: data => {
          window.location.reload();
        }
      })
    }
  }

  getCartItemTotalPrice(cartItem : CartItem) : any {
    if(cartItem.product.price){
      return cartItem.quantity * cartItem.product.price;
    } else {
      return 0;
    }
  }

  completeOrder() {
    if(this.order){
      let orderUpdateRequest : OrderUpdateRequest = {
        id : this.order.id,
        totalPrice : this.totalPrice,
        creationDate : this.order.creationDate,
        completeDate : new Date(),
        status : 1,
        userId : this.order.userId
      }
      console.log(orderUpdateRequest);
      this.orderService.update(this.order.id, orderUpdateRequest).subscribe({
        next: data =>{
          let username = this.storageService.getUsername()
          this.orderService.create({userId : username}).subscribe({
            next : data => {
              this.orderService.getInProgressOrder(username).subscribe(
                res => {                  
                  console.log(res);
                  this.storageService.saveOrderId(res.id);
                  window.location.reload();
                }
              )
            }
          });
        }
      });
    }
  }
}
