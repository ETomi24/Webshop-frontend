import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cart } from '../models/cart/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private urlStart = "http://localhost:8085/api/carts/";

  constructor(private http : HttpClient) { }

  getAll(orderId : number) {
    return this.http.get<Cart[]>(this.urlStart + "all/", );
  }

  addToCart(productId : number, orderId : number, amount : number) {
    return this.http.post(this.urlStart + "add/" + orderId + productId, amount);
  }

  removeFromCart(productId : number, orderId : number, amount : number) {
    return this.http.post(this.urlStart + "remove/" + orderId + productId, amount);
  }
}
