import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order/order';
import { User } from 'src/app/models/user/user';
import { OrderService } from 'src/app/services/order.service';
import { StorageService } from 'src/app/services/storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  
  user? : User;
  orders : Order[] = [];

  isEditing : boolean = false;

  constructor(private userService : UserService, private orderService : OrderService, private storageService : StorageService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    let userId = this.storageService.getUsername();
    this.userService.get(userId).subscribe(res => {
      this.user = res;
    })
  }

  getOrders() {
    let userId = this.storageService.getUsername();
    this.orderService.getFinishedOrders(userId).subscribe(res => this.orders = res);
  }

}
