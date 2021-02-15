import { createAction, props } from '@ngrx/store';

import { User } from '../models/user';


export const LoginUser = createAction('[User Login] User Login', 
props<{ username: string; password: string }>())

export const UserLoggedIn = createAction( '[User Login] User Logged In Succesfully', 
props<{ user: User }>())

export const UserLoginError = createAction('[User Login] User Login failed.')

export const UserLogout = createAction('[User Logout] User Logging out.')
