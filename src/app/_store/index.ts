import { ActionReducerMap, createFeatureSelector } from "@ngrx/store";
import * as fromProducts from '../state/product.reducer'

export interface RootState {
  products: fromProducts.ProductsState,
  // forms: fromProducts.FormState
}

export const appReducer: ActionReducerMap<RootState> = {
  products: fromProducts.productsReducer,
  // forms: fromProducts.formReducer
}

export const getProductsState = createFeatureSelector<fromProducts.ProductsState>('products');
// export const getFormsState = createFeatureSelector<fromProducts.ProductsState>('forms');

