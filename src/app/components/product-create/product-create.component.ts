import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { ProductCreateRequest } from 'src/app/models/productCreateRequest';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  productCreateRequest: ProductCreateRequest | undefined;
  categories : Category[] = [];

  description?: string;
  price?: number;
  quantity?: number;
  name?: string;
  categoryId?: string;

  base64Data: any;
  selectedFile?: File;

  constructor(private productService: ProductService, private categoryService : CategoryService, private router : Router) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getAll().subscribe(res => this.categories = res);
  }

  createProduct() {
    this.productCreateRequest = {
      description: this.description,
      price: this.price,
      quantity: this.quantity,
      name: this.name,
      categoryId: this.categoryId,
      picture: this.base64Data
    }
    console.log(this.productCreateRequest)
    this.productService.create(this.productCreateRequest).subscribe(res => console.log(res))
    this.router.navigate(["/admin-list"]);
  }

  public onFileChanged(event: any) {
    this.selectedFile = event.target.files[0];
    if(this.selectedFile) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        console.log(e.target.result);
        this.base64Data = e.target.result;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }
}
