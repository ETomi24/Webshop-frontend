import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtResponse } from 'src/app/models/auth/jwtResponse';
import { LoginRequest } from 'src/app/models/auth/loginRequest';
import { AuthService } from 'src/app/services/auth.service';
import { OrderService } from 'src/app/services/order.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginRequest?: LoginRequest;
  username?: string;
  password?: string;

  isLoginFailed : boolean = false;

  constructor(private storageService: StorageService, private authService: AuthService, private router : Router, private orderService : OrderService) { }

  ngOnInit(): void {
    this.storageService.cleanStorage();
  }

  login() {
    if (this.username && this.password) {
      this.loginRequest = {
        username: this.username,
        password: this.password
      }
      this.authService.login(this.loginRequest).subscribe({

        next: data => {
          console.log(data);
          let jwtResponse : any = data;
          this.orderService.getInProgressOrder(jwtResponse.username).subscribe({

            next: data => {
              console.log(data);
              this.storageService.saveOrderId(data.id);
            },

            error: err => {
              console.log(err)
              this.orderService.create({userId : jwtResponse.username}).subscribe({
                next : data => {
                  console.log(data);
                  this.orderService.getInProgressOrder(jwtResponse.username).subscribe({
                    next : data => {                  
                      console.log(data);
                      this.storageService.saveOrderId(data.id);
                      this.storageService.saveUserLoginData(jwtResponse.token.toString(), jwtResponse.username, jwtResponse.role);
                      this.isLoginFailed = false;
                      this.router.navigate(['/product-list']);
                    }
                  }                                      
                  )
                }
              })
            }
          })
        },
        error: err => {
          console.log(err);
          this.isLoginFailed = true;
        }
      });
    }
  }

}
