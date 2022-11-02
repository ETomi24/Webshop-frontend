import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin-list-page',
  templateUrl: './admin-list-page.component.html',
  styleUrls: ['./admin-list-page.component.css']
})
export class AdminListPageComponent implements OnInit {

  products? : Observable<Product[]>;

  constructor(private productService : ProductService, private router : Router) {
    this.getProducts();
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.products = this.productService.getAll();
    console.log(this.products)
  }

}
