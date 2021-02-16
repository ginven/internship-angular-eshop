import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Store } from '@ngrx/store';

import { Observable, throwError, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<User>;
  // isLoggedIn: boolean = false;
  constructor(private http: HttpClient) { }

  private database = 'http://localhost:3000/users';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  login(username: string, password: string): Observable<any> {
    return this.http.get(this.database + '?username=' + username).pipe(
      switchMap((users) => {
        const user = users[0];
        if (user.username === "admin"){
          localStorage.setItem('admin', 'true');
        }
        if (user && user.password === password) {
          localStorage.setItem('isLoggedIn', 'true');
          return of(user);
        } else {
          return throwError('Username or password didn\'t match');
        }
      })
    );
  }

  logout(): void {
    // this.isLoggedIn = false;
    return localStorage.clear();
  }
}
