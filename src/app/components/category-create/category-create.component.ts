import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryCreateRequest } from 'src/app/models/category/categoryCreateRequest';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {
  categoryCreateRequest? : CategoryCreateRequest;
  name?: string;

  isFailed : boolean = false;

  constructor(private categoryService : CategoryService, private router : Router) { }

  ngOnInit(): void {
  }

  createCategory() {
    if(this.name){
      this.categoryCreateRequest = {
        name : this.name
      }
      this.categoryService.create(this.categoryCreateRequest).subscribe({
        next: data => {
          this.isFailed = false;
          this.navigateBack();
        },
        error: err => {
          this.isFailed = true;
        }
      })
    } else {
      this.isFailed = true;
    }

  }

  navigateBack() {
    this.router.navigate(['/admin-list']).then(() => {
    window.location.reload();
  });
  }


}
