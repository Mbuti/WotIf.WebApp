import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import "rxjs/Rx";

// Models
import { LoginApiModel } from '../models/LoginApiModel';

@Injectable()
export class AuthProxyService {
  private endpointUrl: string = "";
  private headers: Headers;

  constructor(private http: Http) {
    this.headers = new Headers();
    this.headers.append("Content-Type", "application/json");
    this.headers.append("Accept", "application/json");

    if (!environment.production) {
      this.endpointUrl = "http://localhost:9000";
    }
  }

  getToken(loginModel: LoginApiModel): Observable<any> {
    return this.http.post(this.endpointUrl + "/api/Auth/SignIn", JSON.stringify(loginModel), { headers: this.headers })
      .map((response) => response.json())
      .catch(error => this.handleError(error));
  }

  handleError(error: Response): Observable<any> {
    console.error(error);
    return Observable.throw(error.json().error || "Server error");
  }

}
