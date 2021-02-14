import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { AuthService } from '../state/auth.service';

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
  isLoggedIn = localStorage.getItem('isLoggedIn');

  constructor(private fb: FormBuilder, 
    public authService: AuthService,
    public router: Router) { 

    }

  ngOnInit(): void {
  }

  // login(username: string, password: string){
  //   console.log(this.authService.login(username, password));
  // }

  async login(username: string, password: string) {
    // this.message = 'Trying to log in ...';

    this.authService.login(username, password).subscribe(() => {
      // if (this.authService.isLoggedIn) {
        if (localStorage.getItem('isLoggedIn')) {
        const redirectUrl = '/';
        this.router.navigate([redirectUrl]);
      }
       else {
        console.log('Username or password is incorrect')
       }
    });
  }

  logout() {
    localStorage.clear();
    location.reload();
  }
}
