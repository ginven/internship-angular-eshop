import { createSelector, createFeatureSelector } from '@ngrx/store';

import { getProductsState, getUserState } from '../_store'
import * as productsReducer from './product.reducer';
import * as userReducer from '../auth/user.reducer';

export const getProductList = createSelector(getProductsState, (state: productsReducer.ProductsState) => state.products)

export const getProduct = createSelector(getProductsState, (state: productsReducer.ProductsState) => state.product)
export const getForm = createSelector(getProductsState, (state: productsReducer.ProductsState) => state.editForm)

export const getUserStatus = createSelector(getUserState, (state: userReducer.UserState) => state.user);
// export const getLoginStatus = createSelector(getUserState, (state: userReducer.UserState) => state.user);