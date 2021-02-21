import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { FormGroupState, FormState } from 'ngrx-forms';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Router } from '@angular/router';

import * as ProductActions from '../../actions/product.actions';
import { EditFormValue, ProductsState } from '../../state/product.reducer';
import { getForm } from '../../state/product.selector';
import { Products } from '../../models/product';



@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})


export class AddFormComponent {
 formState$: Observable<FormGroupState<EditFormValue>>;


  constructor(
    private router: Router,
    private store: Store<ProductsState>) {
    this.formState$ = this.store.select(getForm);
   }


  // addProduct(){
  //   this.formState$.pipe(
  //     take(1),
  //     map(fs => ProductActions.AddProduct({ submittedValue: fs.value })),
  //   ).subscribe(this.store);
  //   this.showMessage('<strong>Well done!</strong> You added product succesfully.', 'alert-success');
  //   setTimeout(() => this.router.navigate(['/']), 2000);
  //   // this.store.dispatch(ProductActions.AddProduct({ product }));
  // }

  showMessage = (message: string, cssClass: string) => {
    const htmlMessage = document.createElement('div');
    const userMessageSection = document.querySelector('.main__user-message')
    htmlMessage.innerHTML = `
          <div class="alert alert-sm ${cssClass}" role="alert">
          ${message}
          </div>  
      `
    userMessageSection.appendChild(htmlMessage);
  }


  ngOnInit(): void {

}
}