import { ActionReducerMap, createFeatureSelector, ActionReducer, MetaReducer } from "@ngrx/store";
import * as fromProducts from '../state/product.reducer'
import * as fromUsers from '../auth/user.reducer'
import { localStorageSync } from 'ngrx-store-localstorage';


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

export function localStorageSyncReducer(appReducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({keys: ['cartProducts']})(appReducer);
}
export const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

export const getProductsState = createFeatureSelector<fromProducts.ProductsState>('products');
export const getUserState = createFeatureSelector<fromUsers.UserState>('userSession');
// export const getFormsState = createFeatureSelector<fromProducts.ProductsState>('forms');

