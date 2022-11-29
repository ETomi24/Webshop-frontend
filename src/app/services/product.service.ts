import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product/product';
import { ProductCreateRequest } from '../models/product/productCreateRequest';
import { ProductUpdateRequest } from '../models/product/productUpdateRequest';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private urlStart = "http://localhost:8085/api/products";

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Product[]>(this.urlStart);
  }

  create(productCreateRequest: ProductCreateRequest) {
    return this.http.post<string>(this.urlStart, productCreateRequest);
  }

  update(id? : number, productUpdateRequest? : ProductUpdateRequest) {
    return this.http.put<string>(this.urlStart + "/" + id, productUpdateRequest);
  }

  get(id: number) {
    return this.http.get<Product>(this.urlStart + "/" + id);
  }

  delete(id : number) {
    return this.http.delete<string>(this.urlStart + "/" + id)
  }
}
