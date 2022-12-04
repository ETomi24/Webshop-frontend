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
  address? : string;

  userRegistrationRequest? : UserRegistrationRequest;

  isFailed : boolean = false;
  errorMessage?: string;

  constructor(private userService : UserService, private router : Router) { }

  ngOnInit(): void {
  }

  register() {
    if (this.username && this.password && this.phone && this.email && this.address) {
      this.userRegistrationRequest = {
        username : this.username,
        password : this.password,
        phoneNumber : this.phone,
        address  : this.address,
        email : this.email,
        role : 0
      };
      this.userService.register(this.userRegistrationRequest).subscribe({
        next: data => {
          console.log(data);
          this.router.navigate(['/login']);
          this.errorMessage = "";
          this.isFailed = false;
        },
        error: err =>{
          this.errorMessage = "This user is already existing";
          this.isFailed = true;
        }       
      })
    } else {
      this.isFailed = true;
      this.errorMessage = "Please fill every value"
    }
  }
}
