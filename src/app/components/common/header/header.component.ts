import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import { AuthService } from '../../../auth/auth.service';
import { getUserState } from '../../../_store';
import * as UserActions from '../../../actions/user.actions'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  getState: Observable<any>;
  isLoggedIn: false;
  subscription: Subscription


  // isLoggedIn = localStorage.getItem('isLoggedIn');
  constructor(public authService: AuthService, public router: Router, private store: Store) { 
    this.getState = this.store.select(getUserState);
  }

  ngOnInit(): void {
    this.subscription = this.getState.subscribe((state) => {
      this.isLoggedIn = state.isLoggedIn;
    });
  }
  
  logout(): void {
    this.store.dispatch(UserActions.UserLogout());
  }

  ngOnDestroy() {
    if(this.subscription) {
      this.subscription.unsubscribe()
    }
  }

}
