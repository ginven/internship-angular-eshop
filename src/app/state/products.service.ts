import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Store } from '@ngrx/store';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Products } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Observable<Products[]>
  product: Observable<Products>

  constructor(private http: HttpClient, private store: Store) { }

  private database = 'http://localhost:3000/items';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getProducts(): Observable<Products[]> {
    return this.http.get<Products[]>(this.database);
  }

  addProduct(product): Observable<Products> {
    return this.http.post<Products>(this.database, product, this.httpOptions);
  }

  getProduct(id: number): Observable<Products> {
    return this.http.get<Products>(this.database + '/' + id);
  }

  deleteProduct(id: number) {
    return this.http.delete((this.database + '/' + id), this.httpOptions)
  }

  updateProduct(product: any) {
    const updatedProd = {image: product.image, title: product.title, content: product.content, date: product.date}
    return this.http.put<Products>(this.database + '/' + product.id, updatedProd, this.httpOptions);
  }

}
