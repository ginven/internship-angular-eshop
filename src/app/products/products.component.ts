import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { Products } from './../models/product';
import { ProductsService } from '../products.service';

import * as ProductActions from '../actions/product.actions';
import { getProductList, AppState } from './product.selector';
import { ProductsState } from '../product.reducer';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  // products$: Observable<Products[]> = this.store.select(state => state.products);
  products$: Observable<Products[]> 

constructor(private store: Store) {
      this.products$ = this.store.pipe(select(getProductList))
}

 ngOnInit() {
    console.log(this.products$)
    this.getProducts();
  }

  getProducts() {
    this.store.dispatch(ProductActions.ShowProducts())
    // .subscribe(products => this.products = products);
  }

}
