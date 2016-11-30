import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Services
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: []
})
export class NavComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['login'])
  }

}
