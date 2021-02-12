import { ActionReducerMap } from "@ngrx/store";
import * as fromProducts from '../product.reducer'

export interface RootState {
  products: fromProducts.ProductsState
}

export const appReducer: ActionReducerMap<RootState> = {
  products: fromProducts.productsReducer
}

