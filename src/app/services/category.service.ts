import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private urlStart = "http://localhost:8085/api/categories/"

  constructor(private http : HttpClient) { }

  getAll() {
    return this.http.get<Category[]>(this.urlStart + "all");
  }

  get(name : string) {
    return this.http.get<Category>(this.urlStart + name);
  }

  delete(name : string) {
    return this.http.delete<string>(this.urlStart + "delete/" + name)
  }

  create(name : string) {
    return this.http.post<string>(this.urlStart + "create", name);
  }

  update(id : number) {
    
  }
}
