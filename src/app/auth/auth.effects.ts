import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, tap, withLatestFrom } from 'rxjs/operators';
import { AuthService } from './auth.service';
import * as UserActions from '../actions/user.actions';
import { Store } from '@ngrx/store';

import { getUserState } from '../_store'
import { getCartProducts } from '../state/product.selector';

 
@Injectable()
export class UserEffects {
 
loginUser$ = createEffect(() => this.actions$.pipe(
  ofType(UserActions.LoginUser),
  mergeMap((data) => this.authService.login(data.username, data.password)
    .pipe(
      map(user => UserActions.UserLoggedIn({ user: user })),
      catchError(() => of(UserActions.UserLoginError()))
    ))
  )
);


userLoggedIn$ = createEffect(() =>
this.actions$.pipe(
ofType(UserActions.UserLoggedIn),
  tap((user) => {
      localStorage.setItem('token', 'SomeGeneratedUniqueToken');
      this.router.navigateByUrl('/');
  })
), { dispatch: false });
 

userLogout$ = createEffect(() =>
this.actions$.pipe(
ofType(UserActions.UserLogout),
  tap(() => {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/');
  })
), { dispatch: false });


  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
    private store: Store
  ) {}
}