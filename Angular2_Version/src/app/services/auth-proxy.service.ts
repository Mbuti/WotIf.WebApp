import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from "rxjs/Observable";
import "rxjs/Rx";

// Models
import { LoginApiModel } from '../models/LoginApiModel';

@Injectable()
export class AuthProxyService {
  private headers: Headers;

  constructor(private http: Http) {
    this.headers = new Headers();
    this.headers.append("Content-Type", "application/json");
    this.headers.append("Accept", "application/json");
  }

  getToken(loginModel: LoginApiModel): Observable<any> {
    return this.http.post("/api/Auth/SignIn", JSON.stringify(loginModel), { headers: this.headers })
      .map((result) => result.json())
      .catch(error => this.handleError(error));
  }

  handleError(error: Response): Observable<any> {
    console.error(error);
    return Observable.throw(error.json().error || "Server error");
  }

}
