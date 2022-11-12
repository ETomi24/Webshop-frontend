import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  cleanStorage() {
    localStorage.clear();
  }

  saveUserLoginData(token : string, username : string, role : string) {
    localStorage.setItem("token", token);
    localStorage.setItem("role", role)
    localStorage.setItem("username", username);
  }

  saveOrderId(id : number) {
    console.log(id);
    localStorage.setItem("orderId", JSON.stringify(id));
  }

  getOrderId() : any{
    return localStorage.getItem("orderId");
  }

  getUsername() : any{
    return localStorage.getItem("username")
  }

  getRole() : any{
    return localStorage.getItem("role");
  }

  getToken() : any{
    return localStorage.getItem("token");
  }
}
