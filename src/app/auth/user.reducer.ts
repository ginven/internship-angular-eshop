import { createReducer, on, props } from '@ngrx/store';

import { User } from '../models/user';
import { CartProduct } from '../models/cart';
import * as UserActions from '../actions/user.actions';

export interface UserState {
    user: User | null,
    isLoggedIn: boolean,
    errorMessage: string | null,
    cartProducts: CartProduct[]
  }

  const initialState: UserState = {
      user: {
          id: 0,
          username: '',
          password: '',
          admin: false
      },
      isLoggedIn: false,
      errorMessage: '',
      cartProducts: []
  }

  function addToCart(state, action) {
      if(state.cartProducts === []){
          return {
              ...state, 
              cartProducts: [{
                  product: action.product,
                  quantity: 1
              }]
          }
      }
      const existingProduct = state.cartProducts.find(p => p.product.id === action.product.id);
      if(existingProduct){
        
        const newProducts = state.cartProducts.filter(p => p.product.id !== action.product.id)
        const updatedProduct = Object.assign({}, existingProduct)
        updatedProduct.quantity++
        newProducts.push(updatedProduct);

        return {
            ...state,
            cartProducts: newProducts
        } 
        } else {
            return {
                ...state,
                cartProducts: [...state.cartProducts, {
                    product: action.product,
                    quantity: 1
                }]
            }
      }
  } 

  export const usersReducer = createReducer(
    initialState,
    on(UserActions.UserLoggedIn, (state, props) => ({ 
        ...state, 
        user: {
            username: props.user.username, 
            id: props.user.id,
            admin: props.user.admin
        }, 
        isLoggedIn: true, 
        errorMessage: null
    })), 
    on(UserActions.UserLoginError, (state, props) => ({ 
        ...state, 
        errorMessage: 'Incorrect email and / or password!'
    })), 
    on(UserActions.UserLogout, (state, props) => initialState), 
    on(UserActions.AddToCart, (state, props) => addToCart(state, props)),
    on(UserActions.RemoveFromCart, (state, props) => ({
        ...state,
        cartProducts: state.cartProducts.filter(p => p.product.id !== props.productId)
    })), 
  );