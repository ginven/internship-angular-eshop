import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { getUserState } from 'src/app/_store';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  getState: Observable<any>;
  isAdmin: false;
  subscription: Subscription

  constructor(private router: Router, private store: Store) {
    this.getState = this.store.select(getUserState);
   }

  ngOnInit(): void {
    this.subscription = this.getState.subscribe((state) => {
      this.isAdmin = state.user.admin;
    });
    console.log(this.isAdmin)
  }

}
