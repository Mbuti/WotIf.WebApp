import { Injectable } from '@angular/core';
import { Response, Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import "rxjs/Rx";

// Models
import { CreateSurveyApiModel } from '../models';
import { SurveyApiModel } from '../models';
import { SubmitSurveyApiModel } from '../models';

@Injectable()
export class SurveyProxyService {
  private endpointUrl: string = "";
  private headers: Headers;

  constructor(private http: Http) {
    this.headers = new Headers();
    this.headers.append("Content-Type", "application/json");
    this.headers.append("Accept", "application/json");

    if (!environment.production) {
      this.endpointUrl = "http://localhost:33333";
    }
  }

  createSurvey(survey: CreateSurveyApiModel) {
    return this.http.post(this.endpointUrl + "/api/Survey/Create", JSON.stringify(survey), { headers: this.headers })
      .catch(error => this.handleError(error));
  }

  getSurveys(): Observable<SurveyApiModel[]> {
    return this.http.get(this.endpointUrl + "/api/Survey/GetSurveys", { headers: this.headers })
      .map((response) => <SurveyApiModel[]>response.json())
      .catch(error => this.handleError(error));
  }

  submitSurvey(submitSurveyModel: SubmitSurveyApiModel) {
    return this.http.post(this.endpointUrl + "/api/Survey/Submit", JSON.stringify(submitSurveyModel), { headers: this.headers })
      .map((response) => response.json())
      .catch(error => this.handleError(error));
  }

  handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || "Server error");
  }

}
