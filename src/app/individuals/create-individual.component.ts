import { Component, OnInit } from '@angular/core';
import { MemberApiModel } from '../models/MemberApiModel';
import { MemberProxyService } from '../services/member-proxy.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-individual',
  templateUrl: './create-individual.component.html',
  styleUrls: [],

})
export class CreateIndividualComponent implements OnInit {
  show = "yes";

  member: MemberApiModel;
  inputtedValues = {
    SearchByName: "",
    Name: "",
    Surname: "",
    Age: "",
    ID: "",
    Nationality: "",
    NameOfTalent: "",
    YearsExperience: "",
    EntityName: ""
  };

  angular = false;
  hasTalent = false;
  hasParticipant = false;

  constructor(private MemberProxy: MemberProxyService, private router: Router) {
    this.member = new MemberApiModel();
  }

  ngOnInit() {
  }

  CreateIndividual() {
    this.MemberProxy.createMember(this.member)
      .subscribe(() => { }
      );
    this.router.navigate(["individual-dashboard"]);
  }
}


