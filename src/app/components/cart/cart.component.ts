import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { Store } from '@ngrx/store';

import { CartProduct } from '../../models/cart';
import { getUserState } from '../../_store';
import { getCartProducts } from '../../state/product.selector';
import { UserState } from 'src/app/auth/user.reducer';

import * as UserActions from '../../actions/user.actions';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  userState$: Observable<UserState>
  cartProducts$: Observable<CartProduct[]>;
  cartProducts: CartProduct[]
  subscription: Subscription

  constructor(private store: Store) {
    this.cartProducts$ = this.store.select(getCartProducts);
    this.userState$ = this.store.select(getUserState);
   }

  ngOnInit(): void {
    this.cartProducts$.subscribe(products => {
      this.cartProducts = products
    })
  }

  removeFromCart(productId: number) {
    this.store.dispatch(UserActions.RemoveFromCart({productId}))
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}
