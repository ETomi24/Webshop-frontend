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
}
