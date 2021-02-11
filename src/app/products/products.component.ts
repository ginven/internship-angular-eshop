import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Product } from './../models/product';
import { AppState } from './../app.state';

import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products:any
  constructor(private productsService: ProductsService) { }

 ngOnInit() {
   this.getProducts();
  }

  getProducts() {
    this.productsService.getProducts()
    .subscribe(products => this.products = products);
  }

}
