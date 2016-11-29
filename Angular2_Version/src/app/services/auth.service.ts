import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";

//Models
import { LoginModel } from '../models/LoginModel';

@Injectable()
export class AuthService {
  constructor() { }

  loggedIn() {
    return true;
  }

  login(loginData: LoginModel) {
    return new Observable();
  }

}
