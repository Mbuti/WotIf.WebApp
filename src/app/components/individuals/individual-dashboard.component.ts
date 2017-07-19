import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';

// Components
import { DeleteIndividualComponent } from './delete-individual/delete-individual.component';
import { CreateIndividualComponent } from './create-individual/create-individual.component'

// Services
import { MemberProxyService } from '../../services/member-proxy.service';

// Models
import { MemberApiModel } from '../../models';
import { Race } from '../../models';
import { Nationality } from '../../models';

@Component({
  selector: 'app-individual-dashboard',
  templateUrl: './individual-dashboard.component.html',
  styleUrls: ['./individual-dashboard.component.css']
})
export class IndividualDashboardComponent implements OnInit {

  members: MemberApiModel[] = [];
  SelectedId: number;
  SelectedUsername: any = '';


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