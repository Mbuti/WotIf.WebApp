import { Injectable } from '@angular/core';
import { Response, Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/Rx";

// Models
import { CreateSurveyApiModel } from '../models/CreateSurveyApiModel';
import { SurveyApiModel } from '../models/SurveyApiModel';

@Injectable()
export class SurveyProxyService {
  private headers: Headers;

  constructor(private http: Http) {
    this.headers = new Headers();
    this.headers.append("Content-Type", "application/json");
    this.headers.append("Accept", "application/json");
  }

  createSurvey(survey: CreateSurveyApiModel) {
    return this.http.post("/api/Survey/Create", JSON.stringify(survey), { headers: this.headers })
    .map((response) => response.json())
    .catch(error => this.handleError(error));
  }

  getSurveys(): Observable<SurveyApiModel[]> {
    return this.http.get("/api/Survey/GetSurveys", { headers: this.headers })
    .map((response) => <SurveyApiModel[]>response.json())
    .catch(error => this.handleError(error));
  }

  handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || "Server error");
  }

}