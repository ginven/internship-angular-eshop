import { createAction, Action } from '@ngrx/store';

import { Product } from '../models/product';

export const AddProduct = createAction('[Counter Component] submit');

// export const ADD_PRODUCT = '[Product] Add';
// export const DELETE_PRODUCT = '[Product] Delete';

// export class AddProduct implements Action {
//     readonly type = ADD_PRODUCT;

//     constructor(public payload: Product[]) {}
// }

// export class DeleteProduct implements Action {
//     readonly type = DELETE_PRODUCT;

//     constructor(public payload: number) {}
// }

// export type Actions = AddProduct | DeleteProduct