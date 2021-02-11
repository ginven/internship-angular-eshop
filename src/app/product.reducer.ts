import { Action, createReducer, on } from '@ngrx/store';
import { FormGroupState, createFormGroupState, formGroupReducer } from 'ngrx-forms';
import { onNgrxForms } from 'ngrx-forms';

export interface AddFormValue {
    title: string
  }

export interface Products {
  title: string
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
    products: []
  };

  export const productsReducer = createReducer(
    initialState,
    onNgrxForms()
  );
