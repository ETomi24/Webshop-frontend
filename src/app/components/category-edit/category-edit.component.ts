import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category/category';
import { CategoryUpdateRequest } from 'src/app/models/category/categoryUpdateRequest';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {
  categoryUpdateRequest? : CategoryUpdateRequest;
  category? : Category;

  name?: string;
  id? : number;

  constructor(private categoryService : CategoryService, private route: ActivatedRoute, private router : Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      if (this.id) {
        this.getCategory(this.id);
      }
    })
  }

  getCategory(id : number){
    this.categoryService.get(id).subscribe(res=>{
      this.category = res;
      console.log(res);
      if(this.category){
        this.name = this.category.name;
      }
    })
  }

  updateCategory() {
    this.categoryUpdateRequest = {
      id: this.id,
      name: this.name
    }
    this.categoryService.update(this.id, this.categoryUpdateRequest).subscribe(res => console.log(res));
    this.navigateBack();
  }

  navigateBack() {
    this.router.navigate(['/admin-list']).then(() => {
      window.location.reload();
    });
  }

}
