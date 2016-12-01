import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/Rx";

// Models
import { QuestionTypeApiModel } from '../models/QuestionTypeApiModel';

@Injectable()
export class QuestionProxyService {

  constructor(private http: Http) { }

  getQuestionTypes(): Observable<any> {
    return this.http.get("/api/Question/GetQuestionTypes")
      .map((response) => <QuestionTypeApiModel[]>response.json())
      .catch(error => this.handleError(error));
  }

  handleError(error: Response): Observable<any> {
    console.error(error);
    return Observable.throw(error.json().error || "Server error");
  }

}
