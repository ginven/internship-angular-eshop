import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store  } from '@ngrx/store';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { User } from '../../models/user';
import * as UserActions from '../../actions/user.actions';
import { getUserState } from '../../_store';
import { UserState } from '../../auth/user.reducer';
import { getUserStatus} from '../../state/product.selector';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loginForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(4)]],
    password: ['', [Validators.required, Validators.minLength(4)]],
  });
  user: User;
  isLoggedIn: boolean;
  getState: Observable<any>;
  errorMessage: string | null;

  constructor(private fb: FormBuilder, 
    private store: Store,
    public router: Router) { 
      this.getState = this.store.select(getUserState);
    }

  ngOnInit(): void {
    this.getState.subscribe((state) => {
      this.errorMessage = state.errorMessage;
    });
  }

  login(username: string, password: string) {

    this.store.dispatch(UserActions.LoginUser({ username, password }));
    
    
    // this.store.select(getUserState).subscribe((s) => {
    //   console.log(s)
    // })

    // this.authService.login(username, password).subscribe(() => {
    //   // if (this.authService.isLoggedIn) {
    //     if (localStorage.getItem('isLoggedIn')) {
    //     const redirectUrl = '/';
    //     this.router.navigate([redirectUrl]);
    //   }
    //    else {
    //     console.log('Username or password is incorrect')
    //    }
    // });
  }


  logout() {
    this.store.dispatch(UserActions.UserLogout());
  }
}
