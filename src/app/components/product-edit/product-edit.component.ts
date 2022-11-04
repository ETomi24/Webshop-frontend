import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { ProductUpdateRequest } from 'src/app/models/productUpdateRequest';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  categories: Category[] = [];
  product?: Product;
  productUpdateRequest?: ProductUpdateRequest;

  id?: number
  description?: string;
  price?: number;
  quantity?: number;
  name?: string;
  category?: string;

  base64Data: any;
  selectedFile?: File;

  constructor(private productService: ProductService, private categoryService: CategoryService, private route: ActivatedRoute, private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      if (this.id) {
        this.getProduct(this.id);
      }
    })
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getAll().subscribe(res => this.categories = res);
  }

  getProduct(id: number) {
    this.productService.get(id).subscribe(res => {
      this.product = res;
      if (this.product) {
        this.description = this.product.description;
        this.price = this.product.price;
        this.quantity = this.product.quantity;
        this.name = this.product.name;
        this.category = this.product.category?.name;
        this.base64Data = 'data:image/jpeg;base64,' + this.product.picture;
      }
    });
  }

  updateProduct() {
    this.productUpdateRequest = {
      id: this.id,
      description: this.description,
      price: this.price,
      quantity: this.quantity,
      name: this.name,
      category: this.category,
      picture: this.base64Data
    }
    console.log(this.productUpdateRequest)
    this.productService.update(this.id, this.productUpdateRequest).subscribe(res => console.log(res))
    this.navigateBack();
  }


  public onFileChanged(event: any) {
    this.selectedFile = event.target.files[0];
    if (this.selectedFile) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        console.log(e.target.result);
        this.base64Data = e.target.result;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  navigateBack() {
    this.router.navigate(['/admin-list']).then(() => {
      window.location.reload();
    });
  }


}
