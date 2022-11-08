import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserRegistrationRequest } from 'src/app/models/user/userRegistrationRequest';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {
  username? : string;
  password? : string;
  phone? : string;
  email? : string;

  userRegistrationRequest? : UserRegistrationRequest;

  constructor(private userService : UserService, private router : Router) { }

  ngOnInit(): void {
  }

  register() {
    if (this.username && this.password && this.phone && this.email) {
      this.userRegistrationRequest = {
        username : this.username,
        password : this.password,
        phoneNumber : this.phone,
        email : this.email,
        role : 0
      };
      this.userService.register(this.userRegistrationRequest).subscribe(res => {
        console.log(res);
        this.router.navigate(['/login']);
      })
    }

  }

}
