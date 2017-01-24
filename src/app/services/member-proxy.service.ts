import { Injectable } from '@angular/core';
import { Response, Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import "rxjs/Rx";

// Api Models
import { MemberApiModel } from '../models/MemberApiModel';

@Injectable()
export class MemberProxyService {
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

  createMember(member: MemberApiModel) {
    return this.http.post(this.endpointUrl + "/api/Individual/CreateIndividual", JSON.stringify(member), { headers: this.headers })
      // .map((response) => response.json())
      .catch(error => this.handleError(error));
  }

  getMembers(): Observable<MemberApiModel[]> {
    return this.http.get(this.endpointUrl + "/api/Individual/Individuals", { headers: this.headers })
      .map((response) => <MemberApiModel[]>response.json())
      .catch(error => this.handleError(error));
  }
  getMemberById(id: number): Observable<MemberApiModel> {
    return this.http.get(this.endpointUrl + "/api/Individual/FindIndividualsById?memberId=" + id, { headers: this.headers })
      .map((response) => <MemberApiModel>response.json())
      .catch(error => this.handleError(error));
  }

  removeMember(id: number) {
    return this.http.delete("api/Individual/DeleteIndividual?id=" + id, { headers: this.headers })
      .catch(error => this.handleError(error))

  }
  editMember(id: number, member: MemberApiModel): Observable<MemberApiModel> {
    return this.http.put(this.endpointUrl + "/api/Individual/EditIndividual?memberId=" + id, JSON.stringify(member), { headers: this.headers })
      .map((response) => <MemberApiModel>response.json())
      .catch(error => this.handleError(error));

  }

  handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || "Server error");
  }

}
