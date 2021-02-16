import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { map, take } from 'rxjs/operators';
import { FormGroupState } from 'ngrx-forms';

import * as ProductActions from '../../actions/product.actions';
import { getProductList, getProduct, getForm } from '../../state/product.selector';
import { Products } from '../../models/product';
import { EditFormValue } from '../../state/product.reducer';

@Component({
  selector: 'app-edit-item-form',
  templateUrl: './edit-item-form.component.html',
  styleUrls: ['./edit-item-form.component.scss']
})
export class EditItemFormComponent implements OnInit {
  product$: Observable<Products>; 
  formState$: Observable<FormGroupState<EditFormValue>> = this.store.select(getForm);
  id: number = +this.route.snapshot.paramMap.get('id');
  updateForm = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(4)]],
    image: ['', [Validators.required, Validators.minLength(10)]],
    content: ['', [Validators.required, Validators.minLength(4)]],
    quantity: [null, [Validators.min(0), Validators.max(99)]],
    date: ['', Validators.required]
  });

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private store: Store) { 
    }

  ngOnInit(): void {
    this.store.dispatch(ProductActions.GetProduct({ productId: this.id }))
    this.product$ = this.store.select(getProduct)
  }

  deleteProduct(id:number): void {
    if (!confirm('Are you sure you want to delete this item?')) {
      return
    }
    this.store.dispatch(ProductActions.DeleteProduct({ productId: id }))
    this.showMessage('<strong>Well done!</strong> You deleted product succesfully.', 'alert-success');
    setTimeout(() => this.router.navigate(['/']), 2000)

  }

  updateProduct(): void {
    this.updateForm.value.id = this.id;
    this.store.dispatch(ProductActions.UpdateProduct(this.updateForm.value));
    this.showMessage('<strong>Well done!</strong> You updated product succesfully.', 'alert-success');
    setTimeout(() => this.router.navigate(['/']), 2000)
  }

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
}
