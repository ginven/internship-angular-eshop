import { ActionReducerMap, createFeatureSelector } from "@ngrx/store";
import * as fromProducts from '../state/product.reducer'
import * as fromUsers from '../auth/user.reducer'


export interface RootState {
  products: fromProducts.ProductsState,
  userSession: fromUsers.UserState,
  // forms: fromProducts.FormState
}

export const appReducer: ActionReducerMap<RootState> = {
  products: fromProducts.productsReducer,
  userSession: fromUsers.usersReducer
  // forms: fromProducts.formReducer
}

export const getProductsState = createFeatureSelector<fromProducts.ProductsState>('products');
export const getUserState = createFeatureSelector<fromUsers.UserState>('userSession');
// export const getFormsState = createFeatureSelector<fromProducts.ProductsState>('forms');

