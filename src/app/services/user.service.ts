import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserRegistrationRequest } from '../models/user/userRegistrationRequest';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private urlStart = "http://localhost:8085/api/users/";

  constructor(private http : HttpClient) { }

  register(userRegistrationRequest : UserRegistrationRequest) {
    return this.http.post(this.urlStart + "register", userRegistrationRequest);
  }
}
