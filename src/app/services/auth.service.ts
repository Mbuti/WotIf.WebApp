import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";

// Models
import { LoginApiModel } from '../models/LoginApiModel';

// Services
import { AuthProxyService } from '../services/auth-proxy.service';

@Injectable()
export class AuthService {
  isLoggedIn: boolean = true;

  constructor(private authProxy: AuthProxyService) { }

  loggedIn(): boolean {
    return this.isLoggedIn;
  }

  login(loginModel: LoginApiModel): Observable<any> {
    this.isLoggedIn = true;
    return this.authProxy.getToken(loginModel);
  }

  logout() {
    this.isLoggedIn = false;
  }

}
