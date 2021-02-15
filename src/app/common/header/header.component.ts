import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AuthService } from '../../state/auth.service';
import { getUserState } from '../../_store';
import * as UserActions from '../../actions/user.actions'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  getState: Observable<any>;
  isLoggedIn: false;
  user = null;
  errorMessage = null;

  // isLoggedIn = localStorage.getItem('isLoggedIn');
  constructor(public authService: AuthService, public router: Router, private store: Store) { 
    this.getState = this.store.select(getUserState);
  }

  ngOnInit(): void {
    this.getState.subscribe((state) => {
      this.isLoggedIn = state.isLoggedIn;
      this.user = state.user;
      this.errorMessage = state.errorMessage;
    });
  }
  
  logout(): void {
    this.store.dispatch(UserActions.UserLogout());
  }

}
