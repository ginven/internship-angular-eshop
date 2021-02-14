import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Products } from './../models/product';

import * as ProductActions from '../actions/product.actions';
import { getProductList } from '../state/product.selector';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  // products$: Observable<Products[]> = this.store.select(state => state.products);
  products$: Observable<Products[]> 

constructor(private store: Store) {
}

 ngOnInit(): void {
    this.store.dispatch(ProductActions.GetProducts())
    this.products$ = this.store.select(getProductList)
  }


}
