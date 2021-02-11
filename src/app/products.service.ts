import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Product } from './models/product';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http: HttpClient) { }

  private database = 'http://localhost:3000/items';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getProducts(): Observable<{}> {
    return this.http.get(this.database)
  }

  addProduct(product): Observable<{}> {
    return this.http.post(this.database, product, this.httpOptions);
  }

  getProduct(id: number): Observable<{}> {
    return this.http.get(this.database + '/' + id);
  }

  deleteProduct(id: number): Observable<{}>  {
    return this.http.delete((this.database + '/' + id), this.httpOptions)
  }



}
