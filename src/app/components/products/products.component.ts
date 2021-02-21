import { Component, OnInit } from '@angular/core';

import { Observable, Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Products } from '../../models/product';

import * as ProductActions from '../../actions/product.actions';
import * as UserActions from '../../actions/user.actions';
import { getProductList } from '../../state/product.selector';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products$: Observable<Products[]> 
  subscription: Subscription 


constructor(private store: Store) {
}

 ngOnInit(): void {
    this.store.dispatch(ProductActions.GetProducts())
    this.products$ = this.store.select(getProductList)
  }

  addToCart(product: Products): void {
    this.subscription = this.products$.subscribe(items => {
      const item = items.filter(p => p === product)
       if(item[0].quantity < 1){
          return this.showMessage('There are no products left', 'alert-danger')
        } 
       this.store.dispatch(UserActions.AddToCart({product}))
       this.showMessage('Item added to the cart', 'alert-success')
      }
    )
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
    setTimeout(() => userMessageSection.innerHTML = '', 2000);
  }

  ngOnDestroy() {
    if(this.subscription) {
      this.subscription.unsubscribe()
    }

  }

}
