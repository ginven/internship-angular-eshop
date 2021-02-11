import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormGroupState } from 'ngrx-forms';
import { Observable } from 'rxjs';

import * as ProductsActions from './../actions/product.actions';
import { AddFormValue, AppState } from '../product.reducer';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
// export class AddFormComponent implements OnInit {
//   formState: Observable<FormGroupState<AddFormValue>>;
export class AddFormComponent {
  formState$: Observable<FormGroupState<AddFormValue>>;

  constructor( private productsService: ProductsService, private store: Store<AppState>) {
    this.formState$ = store.select(s => s.addForm);
   }

  addProduct(){
  }

  ngOnInit(): void {
  }

}
