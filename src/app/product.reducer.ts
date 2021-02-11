import { Action } from '@ngrx/store';
import { FormGroupState, createFormGroupState, formGroupReducer } from 'ngrx-forms';

import { Product } from './models/product';
import * as ProductActions from './actions/product.actions';
import { Title } from '@angular/platform-browser';

export interface AddFormValue {
    title: string
  }

const FORM_ID = 'WD5iFkQInzjz3Oh14T1P';

const initialFormState = createFormGroupState<AddFormValue>(FORM_ID, {
    title: 'test'
  });
  

export interface AppState {
    addForm:  FormGroupState<AddFormValue>
  }

  const initialState: AppState = {
    addForm: initialFormState
  };

export function productReducer(state = initialState, action: Action): AppState {
    const addForm = formGroupReducer(state.addForm, action)
    if (addForm !== state.addForm) {
        state = { ...state, addForm };
      }

      return state;

}


// import { Action } from "@ngrx/store";
// import { createFormGroupState, formStateReducer } from "ngrx-forms";

// export interface MyFormValue {
//   stringValue: string;
// }

// export const initialState = createFormGroupState<MyFormValue>("FORM", {
//   stringValue: ""
// });

// export function formReducer(state = initialState, action: Action) {
//   return formStateReducer(state, action);
// }

