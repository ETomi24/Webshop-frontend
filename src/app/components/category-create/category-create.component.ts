import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryCreateRequest } from 'src/app/models/categoryCreateRequest';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {
  categoryCreateRequest? : CategoryCreateRequest;
  name?: string;

  constructor(private categoryService : CategoryService, private router : Router) { }

  ngOnInit(): void {
  }

  createCategory() {
    this.categoryCreateRequest = {
      name : this.name
    }
    this.categoryService.create(this.categoryCreateRequest).subscribe(res => {
        console.log(res);
    })
    this.navigateBack();
  }

  navigateBack() {
    this.router.navigate(['/admin-list']).then(() => {
    window.location.reload();
  });
  }


}
