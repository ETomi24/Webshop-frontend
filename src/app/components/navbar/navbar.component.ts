import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  username? : string;
  role? :string;

  constructor(private storageService : StorageService, private router : Router) { }

  ngOnInit(): void {
    this.username = this.storageService.getUsername();
    this.role = this.storageService.getRole();
  }

  logout() {
    this.storageService.cleanStorage();
    this.router.navigate(['/login']).then(() => {
      window.location.reload();
    });
  }
}
