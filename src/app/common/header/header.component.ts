import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../state/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn = localStorage.getItem('isLoggedIn');
  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit(): void {
  }
  
  logout() {
    // this.authService.logout();
    localStorage.clear();
    location.reload();
  }

}
