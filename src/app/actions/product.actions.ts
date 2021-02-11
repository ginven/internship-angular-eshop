import { Title } from '@angular/platform-browser';
import { createAction, Action, props } from '@ngrx/store';

import { Products } from '../models/product';

// export const ShowProducts = createAction('[Products Load] Load Products', 
// props<{ products: Products[] }>()
// )

export const SHOW_PRODUCTS = '[Products Load] Load Products';
export const SHOW_PRODUCT_SUCCESS = '[Products Load] Products Load Success';

export class ShowProducts implements Action {
    readonly type = SHOW_PRODUCTS;

    constructor(public payload: Products[]) {}
}

export class LoadProducts implements Action {
    readonly type = SHOW_PRODUCT_SUCCESS;

    constructor(public payload: Products[]) {}
}

// export class DeleteProduct implements Action {
//     readonly type = DELETE_PRODUCT;

//     constructor(public payload: number) {}
// }

// export type Actions = AddProduct | DeleteProduct