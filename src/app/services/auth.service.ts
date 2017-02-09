import { Injectable } from '@angular/core';
import { tokenNotExpired } from "angular2-jwt";
import { Observable } from "rxjs/Observable";

// Models
import { LoginApiModel } from '../models/LoginApiModel';

// Services
import { AuthProxyService } from '../services/auth-proxy.service';

@Injectable()
export class AuthService {

  constructor(private authProxy: AuthProxyService) { }

  loggedIn(): boolean {
    if (tokenNotExpired()) {
            return true;
        } else {
            localStorage.clear();
            return false;
        }
  }

  login(loginModel: LoginApiModel): Observable<any> {
    return this.authProxy.getToken(loginModel);
  }

  logout() {
    localStorage.clear();
  }

}
