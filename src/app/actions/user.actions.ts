import { createAction, props } from '@ngrx/store';
import { Products } from '../models/product';

import { User } from '../models/user';


export const LoginUser = createAction('[User Login] User Login', 
props<{ username: string; password: string }>());

export const UserLoggedIn = createAction( '[User Login] User Logged In Succesfully', 
props<{ user: User }>());

export const UserLoginError = createAction('[User Login] User Login failed.');

export const UserLogout = createAction('[User Logout] User Logging out.');

export const GetCart = createAction( '[Cart Action] Get Cart Products');

export const AddToCart = createAction( '[Cart Action] Add Product To Cart', 
props<{ product: Products }>());

export const RemoveFromCart = createAction( '[Cart Action] Remove Product From Cart', 
props<{ productId: number }>());

export const CartSuccess = createAction( '[Cart Action] Cart Update Success');

export const CartError = createAction( '[Cart Action] Cart Update Failed');
