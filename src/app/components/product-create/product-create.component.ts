import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
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
  pictureUrl?: string;


  selectedFile?: File;
  base64Data: any;
  imageName: any;

  constructor(private productService: ProductService, private categoryServive : CategoryService, private router : Router) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoryServive.getAll().subscribe(res => this.categories = res);
  }

  createProduct() {
    this.productCreateRequest = {
      description: this.description,
      price: this.price,
      quantity: this.quantity,
      name: this.name,
      categoryId: this.categoryId,
      pictureUrl: this.selectedFile?.name
    }
    console.log(this.productCreateRequest)
    this.productService.create(this.productCreateRequest).subscribe(res => console.log(res))
    this.router.navigate(["/admin-list"]);
  }

  public onFileChanged(event: any) {
    this.selectedFile = event.target.files[0];
  }

}
