import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';

import { IndividualDashboardComponent } from '../individual-dashboard.component';

import { MemberApiModel } from '../../../models';

import { MemberProxyService } from '../../../services/member-proxy.service';


@Component({
  selector: 'app-delete-individual',
  templateUrl: './delete-individual.component.html',
  styleUrls: ['./delete-individual.component.css']
})
export class DeleteIndividualComponent implements OnInit {

  id: number;
  member: MemberApiModel = new MemberApiModel();

  constructor(private MemberProxy: MemberProxyService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.MemberProxy.getMemberById(this.id)
      .subscribe((member) =>
        this.member = member);
  }

  DeleteMember(id: number) {
    this.MemberProxy.removeMember(id);
    this.router.navigate(["individual-dashboard"]);
  }

  ReturnToIndividuals() {
    this.router.navigate(["individual-dashboard"]);
  }

}
