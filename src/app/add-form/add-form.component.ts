import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormGroupState } from 'ngrx-forms';
import { Observable } from 'rxjs';

import * as ProductActions from './../actions/product.actions';
import { AddFormValue } from '../product.reducer';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {
  formState$: Observable<FormGroupState<AddFormValue>>;

  constructor(
    private productsService: ProductsService,
    private store: Store) {
    // this.formState$ = store.select(s => s.addForm);
   }

  addProduct(){
    // this.store.dispatch(ProductActions.AddProduct());
  }

  ngOnInit(): void {
  }

}
