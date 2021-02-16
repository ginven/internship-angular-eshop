import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { AuthService } from './auth.service';
import { getUserState } from '../_store';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  isLoggedIn: boolean;
  roleAdmin: boolean;
  getState: Observable<any>
  constructor(private authService: AuthService, private router: Router, private store: Store) {
    this.getState = this.store.select(getUserState);
  }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): true|UrlTree {
    this.getState.subscribe((data) => {
        this.isLoggedIn = data.isLoggedIn;
      })
      if (this.isLoggedIn) {
        return true
      } 
      return this.router.parseUrl('/');
    }
}

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  isLoggedIn: boolean;
  roleAdmin: boolean;
  getState: Observable<any>
  constructor(private authService: AuthService, private router: Router, private store: Store) {
    this.getState = this.store.select(getUserState);
  }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): true|UrlTree {
      this.getState.subscribe((data) => {
        this.isLoggedIn = data.isLoggedIn;
        this.roleAdmin = data.user.admin
      })
      if (this.isLoggedIn && this.roleAdmin) {
        return true;
      }
      return this.router.parseUrl('/');
      }
    }


