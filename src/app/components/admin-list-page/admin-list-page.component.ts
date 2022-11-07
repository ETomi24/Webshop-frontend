import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category/category';
import { Product } from 'src/app/models/product/product';
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
  selectedCategoryId? : number;

  constructor(private productService: ProductService,private categoryService : CategoryService, private router: Router) {
    this.getProducts();
    this.getCategories();
  }

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }

  getProducts() {
    this.productService.getAll().subscribe(res =>
      {
        //console.log(res);
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
    if (this.selectedCategoryId) {
      this.categoryService.delete(this.selectedCategoryId).subscribe(res => {
        console.log(res);              
      })     
    }
    window.location.reload(); 
    this.selectedCategoryId = undefined;
  }

  selectProductId(id?: number) {
    this.selectedProductId = id;
  }

  selectCategoryId(id? : number) {
    this.selectedCategoryId = id;
  }
}
