import { createReducer, on, props } from '@ngrx/store';

import { User } from '../models/user';
import * as UserActions from '../actions/user.actions';

export interface UserState {
    user: User | null,
    isLoggedIn: boolean,
    errorMessage: string | null;
  }

  const initialState: UserState = {
      user: {
          id: 0,
          username: '',
          password: '',
          admin: false
      },
      isLoggedIn: false,
      errorMessage: ''
  }

  export const usersReducer = createReducer(
    initialState,
    on(UserActions.UserLoggedIn, (state, props) => ({ 
        ...state, 
        user: {
            username: props.user.username, 
            id: props.user.id
        }, 
        isLoggedIn: true, 
        errorMessage: null
    })), 
    on(UserActions.UserLoginError, (state, props) => ({ 
        ...state, 
        errorMessage: 'Incorrect email and / or password!'
    })), 
    on(UserActions.UserLogout, (state, props) => initialState), 

  );