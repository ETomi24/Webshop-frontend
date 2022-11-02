import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { ProductCreateRequest } from '../models/productCreateRequest';
import { ProductUpdateRequest } from '../models/productUpdateRequest';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private urlStart = "http://localhost:8085/api/products/";

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Product[]>(this.urlStart + "all");
  }

  create(productCreateRequest: ProductCreateRequest) {
    return this.http.post<string>(this.urlStart + "create", productCreateRequest);
  }

  update(id? : number, productUpdateRequest? : ProductUpdateRequest) {
    return this.http.post<string>(this.urlStart + "update/" + id, productUpdateRequest);
  }

  get(id: number) {
    return this.http.get<Product>(this.urlStart + id);
  }
}
