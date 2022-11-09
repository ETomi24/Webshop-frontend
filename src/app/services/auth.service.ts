import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from '../models/auth/loginRequest';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private urlStart = "http://localhost:8085/api/auth/";

  constructor(private http : HttpClient) { }

  login(loginRequest : LoginRequest) {
    return this.http.post(this.urlStart + 'login', loginRequest)
  }
}
