import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { AuthService } from './auth.service';
import * as UserActions from '../actions/user.actions';

 
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

//   @Effect({ dispatch: false })
//   LogInSuccess: Observable<any> = this.actions.pipe(
//     ofType(AuthActionTypes.LOGIN_SUCCESS),
//     tap((user) => {
//       localStorage.setItem('token', user.payload.token);
//       this.router.navigateByUrl('/');
//     })
//   );

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
    private router: Router
  ) {}
}