import { createSelector, createFeatureSelector } from '@ngrx/store';

import { Products } from '../models/product';
import * as productsReducer from '../product.reducer';

// export const productsFeatureKey = 'products';
   
// export const selectProductsState = createFeatureSelector<productsReducer.ProductsState>(
//     productsFeatureKey
//   );
//   export const getProductList = createSelector(selectProductsState, (state: productsReducer.ProductsState) => state.products)


export interface AppState {
    products: productsReducer.ProductsState;
  }

export const getProductsState = (state: AppState) => state.products;

export const getProductList = createSelector(getProductsState, (state: productsReducer.ProductsState) => state.products)