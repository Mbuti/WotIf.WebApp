import { Injectable } from '@angular/core';
import { Response, Headers } from '@angular/http';
import { AuthHttp } from "angular2-jwt";
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import "rxjs/Rx";

// Api Models
import { MemberApiModel } from '../models/MemberApiModel';

@Injectable()
export class MemberProxyService {
  private endpointUrl: string = "";

  constructor(private http: AuthHttp) {
    if (!environment.production) {
      this.endpointUrl = "http://localhost:9000";
    }
  }

  createMember(member: MemberApiModel) {
    return this.http.post(this.endpointUrl + "/api/Individual/CreateIndividual", JSON.stringify(member))
      // .map((response) => response.json())
      .catch(error => this.handleError(error));
  }

  getMembers(): Observable<MemberApiModel[]> {
    return this.http.get(this.endpointUrl + "/api/Individual/GetAllIndividuals")
      .map((response) => <MemberApiModel[]>response.json())
      .catch(error => this.handleError(error));
  }
  getMemberById(id: number): Observable<MemberApiModel> {
    return this.http.get(this.endpointUrl + "/api/Individual/FindIndividualsById?memberId=" + id)
      .map((response) => <MemberApiModel>response.json())
      .catch(error => this.handleError(error));
  }

  removeMember(id: number) {
    return this.http.delete("api/Individual/DeleteIndividual?id=" + id)
      .catch(error => this.handleError(error))

  }
  editMember(id: number, member: MemberApiModel): Observable<MemberApiModel> {
    return this.http.put(this.endpointUrl + "/api/Individual/EditIndividual?memberId=" + id, JSON.stringify(member))
      .map((response) => <MemberApiModel>response.json())
      .catch(error => this.handleError(error));

  }

  handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || "Server error");
  }

}
