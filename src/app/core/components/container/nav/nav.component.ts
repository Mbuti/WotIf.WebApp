import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Services
import { AuthService } from '../../../services';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html'
})
export class NavComponent implements OnInit {

  constructor(
    // Need to make auth private - this will break aot build as long as nav.html references auth.
    public auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['login'])
  }

}
