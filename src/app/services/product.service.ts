import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { ProductCreateRequest } from '../models/productCreateRequest';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private urlStart = "http://localhost:8085/api/products/";

  constructor(private http : HttpClient) { }

  getAll() {
    return this.http.get<Product[]>(this.urlStart + "all");
  }

  create(productCreateRequest : ProductCreateRequest) {
    return this.http.post<string>(this.urlStart + "create", productCreateRequest);
  }
}
