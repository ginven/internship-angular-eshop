import { createReducer, on } from '@ngrx/store';
import { FormGroupState, createFormGroupState, formGroupReducer } from 'ngrx-forms';
import { onNgrxForms } from 'ngrx-forms';

import * as ProductActions from './actions/product.actions';


export interface AddFormValue {
    title: string
  }


  export interface Products {
    id: number;
    date: string;
    title: string;
    image: string;
    content: string;
}

const initialFormState = createFormGroupState<AddFormValue>('products_form', {
  title: 'test'
});

export interface ProductsState {
  addForm:  FormGroupState<AddFormValue>,
  products: Products[]
}

const initialState: ProductsState = {
  addForm: initialFormState,
  products: [   {
    "id": 1,
    "date": "2021-02-04",
    "title": "Wok with lid",
    "image": "https://d2rbyiw1vv51io.cloudfront.net/web/ikea4/images/897/0789733_PE764109_S4.jpg",
    "content": "19.99"
  },
  {
    "title": "4 blue mugs",
    "image": "https://d2rbyiw1vv51io.cloudfront.net/web/ikea4/images/552/0455293_PH133702_S4.jpg",
    "date": "2021-02-04",
    "content": "21.99",
    "id": 2
  },]
};

export const productsReducer = createReducer(
  initialState,
  // on(ProductActions.LoadProducts, (state, action) => {
  //   return {
  //     ...state,
  //     products
  //   }
  // }),
  onNgrxForms()
);

