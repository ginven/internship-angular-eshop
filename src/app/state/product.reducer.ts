import { createReducer, on, props, Action, combineReducers } from '@ngrx/store';
import { FormGroupState, createFormGroupState,  updateGroup, onNgrxForms, validate, formGroupReducer, formStateReducer } from 'ngrx-forms';
import { required, greaterThanOrEqualTo, lessThan } from 'ngrx-forms/validation';

import * as ProductActions from '../actions/product.actions';
import * as UserActions from '../actions/user.actions';
import { Products } from '../models/product'


export interface EditFormValue {
  title: string,
  date: string,
  image: string,
  quantity: number,
  content: string
}


const initialFormState = createFormGroupState<EditFormValue>('products_form', {
  title: '',
  date: '',
  image: '',
  quantity: 0,
  content: ''
});

const validateMyForm = updateGroup<EditFormValue>({
  title: validate(required),
  date: validate(required),
  image: validate(required),
  content: validate(required),
  quantity: validate(greaterThanOrEqualTo(0), lessThan(99))
})

export interface ProductsState {
  editForm: FormGroupState<EditFormValue>,
  products: Products[],
  product: Products
}

const initialState: ProductsState = {
  editForm: initialFormState,
  products: [   {
    "id": 1,
    "date": "2021-02-04",
    "title": "Wok with lid",
    "image": "https://d2rbyiw1vv51io.cloudfront.net/web/ikea4/images/897/0789733_PE764109_S4.jpg",
    "content": "19.99",
    "quantity": 0
  },
  {
    "title": "4 blue mugs",
    "image": "https://d2rbyiw1vv51io.cloudfront.net/web/ikea4/images/552/0455293_PH133702_S4.jpg",
    "date": "2021-02-04",
    "content": "21.99",
    "id": 2,
    "quantity": 0
  },],
  product: {
    "id": 0,
    "date": "",
    "title": "",
    "image": "",
    "content": "",
    "quantity": 0
  }
};


export const productsReducer = createReducer(
  initialState,
  on(ProductActions.GetProducts, (state, props) => ({ ...state, products: [...state.products] })), 
  on(ProductActions.LoadProducts, (state, props) => ({ ...state, products: props.products })), 
  on(ProductActions.GetProduct, (state, props) => ({ ...state, product: state.product })), 
  on(ProductActions.LoadOneProduct, (state, props) => ({ ...state, product: props.product })), 
  onNgrxForms(),
  on(ProductActions.AddProduct, (state, { submittedValue }) => ({ ...state, submittedValue }))
);

