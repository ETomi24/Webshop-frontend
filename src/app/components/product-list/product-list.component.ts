import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products : Product[] = [];

  constructor(private productService : ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getAll().subscribe(res => this.products = res)
  }

  getImage(product : Product) : any {
    if(product.picture) {
      return 'data:image/jpeg;base64,' + product.picture;
    } else {
      return 'https://via.placeholder.com/340x255';
    }
  }

}
