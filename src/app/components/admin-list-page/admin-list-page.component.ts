import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin-list-page',
  templateUrl: './admin-list-page.component.html',
  styleUrls: ['./admin-list-page.component.css']
})
export class AdminListPageComponent implements OnInit {

  products?: Product[];
  selectedProductId?: number;

  categories?: Category[];
  selectedCategory? : string;

  constructor(private productService: ProductService,private categoryService : CategoryService, private router: Router) {
    this.getProducts
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getAll().subscribe(res =>
      {
        console.log(res);
        this.products = res;
      }
    );
  }

  getCategories() {
    this.categoryService.getAll().subscribe(res => 
      {
        console.log(res);
        this.categories = res;
      }
    )
  }

  deleteProduct() {
    if (this.selectedProductId) {
      this.productService.delete(this.selectedProductId).subscribe(res => {
        console.log(res);        
      })     
    }
    window.location.reload();
    this.selectedProductId = undefined;
  }

  deleteCategory() {
    if (this.selectedCategory) {
      this.categoryService.delete(this.selectedCategory).subscribe(res => {
        console.log(res);        
      })     
    }
    window.location.reload();
    this.selectedCategory = undefined;
  }

  selectProductId(id?: number) {
    this.selectedProductId = id;
  }

  selectCategory(name? : string) {
    this.selectedCategory = name;
  }
}
