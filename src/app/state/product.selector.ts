import { createSelector, createFeatureSelector } from '@ngrx/store';

import { getProductsState } from '../_store'
import * as productsReducer from './product.reducer';

export const getProductList = createSelector(getProductsState, (state: productsReducer.ProductsState) => state.products)

export const getProduct = createSelector(getProductsState, (state: productsReducer.ProductsState) => state.product)
export const getForm = createSelector(getProductsState, (state: productsReducer.ProductsState) => state.editForm)