import { Component, OnInit } from '@angular/core';
import { MemberProxyService } from '../services/member-proxy.service';
import { MemberApiModel } from '../models/MemberApiModel';
import { Router } from '@angular/router';
import { DeleteindividualComponent } from './delete-individual/deleteindividual.component';
import { CreateIndividualComponent } from './create-individual/create-individual.component'
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Race } from '../models/MemberApiModel';
import { Nationality } from '../models/MemberApiModel';

@Component({
  selector: 'app-individual-dashboard',
  templateUrl: './individual-dashboard.component.html',
  styleUrls: ['./individual-dashboard.component.css']
})
export class IndividualDashboardComponent implements OnInit {

  private members: MemberApiModel[] = [];
  private SelectedId: number;


  constructor(private MemberProxy: MemberProxyService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.MemberProxy.getMembers()
      .subscribe((members) => {
        this.members = members;
      });
  }

  IsSelected(member: MemberApiModel) {
    return member.id === this.SelectedId;
  }

  EditMember(member: MemberApiModel) {
    this.router.navigate(['individual-edit/' + member.id]);
  }

  DeleteMember(member: MemberApiModel) {
    this.router.navigate(['deleteindividual/' + member.id]);
  }

}