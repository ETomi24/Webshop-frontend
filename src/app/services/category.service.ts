import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/category/category';
import { CategoryCreateRequest } from '../models/category/categoryCreateRequest';
import { CategoryUpdateRequest } from '../models/category/categoryUpdateRequest';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private urlStart = "http://localhost:8085/api/categories/"

  constructor(private http : HttpClient) { }

  getAll() {
    return this.http.get<Category[]>(this.urlStart + "all");
  }

  get(id : number) {
    return this.http.get<Category>(this.urlStart + id);
  }

  delete(id : number) {
    return this.http.delete<string>(this.urlStart + "delete/" + id)
  }

  create(categoryCreateRequest : CategoryCreateRequest) {
    return this.http.post<string>(this.urlStart + "create", categoryCreateRequest);
  }

  update(id? : number, categoryUpdateRequest? : CategoryUpdateRequest) {
    return this.http.post<string>(this.urlStart + "update/" + id, categoryUpdateRequest);
  }
}
