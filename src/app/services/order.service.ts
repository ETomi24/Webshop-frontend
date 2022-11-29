import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../models/order/order';
import { OrderCreateRequest } from '../models/order/orderCreateRequest';
import { OrderUpdateRequest } from '../models/order/orderUpdateRequest';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private urlStart = "http://localhost:8085/api/orders";

  constructor(private http : HttpClient) { }

  get(id : number) {
    return this.http.get<Order>(this.urlStart + "/" + id);
  }

  getFinishedOrders(username : string) {
    return this.http.get<Order[]>(this.urlStart + "/finished/" + username);
  }

  getInProgressOrder(username: string) {
    return this.http.get<Order>(this.urlStart + "/in_progress/" + username);
  }

  create(orderCreateRequest : OrderCreateRequest) {
    return this.http.post(this.urlStart, orderCreateRequest);
  }

  update(id : number , orderUpdateRequest : OrderUpdateRequest){
    return this.http.put(this.urlStart + "/" + id, orderUpdateRequest);
  }

  complete(id : number) {
    return this.http.patch(this.urlStart + "/complete/" + id, {});
  }







}
