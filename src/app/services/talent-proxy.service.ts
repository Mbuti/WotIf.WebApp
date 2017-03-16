import { Injectable } from '@angular/core';
import { Response, Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import "rxjs/Rx";

// Models
//import { TalentTypeApiModel } from '../models/TalentTypeApiModel';

@Injectable()
export class TalentProxyService {
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

 // getTalentTypes(): Observable<any> {
 //   return this.http.get(this.endpointUrl + "/api/Talent/GetTalentTypes", { headers: this.headers })
 //     .map((response) => <TalentTypeApiModel[]>response.json())
 //     .catch(error => this.handleError(error));
 // }

  handleError(error: Response): Observable<any> {
    console.error(error);
    return Observable.throw(error.json().error || "Server error");
  }

}
