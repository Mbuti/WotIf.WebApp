import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";

//Models
import { LoginModel } from '../models/LoginModel';

@Injectable()
export class AuthService {
  isLoggedIn: boolean = true;

  constructor() { }

  loggedIn(): boolean {
    return this.isLoggedIn;
  }

  login(loginData: LoginModel) {
    this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
  }

}
