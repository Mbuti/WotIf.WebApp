import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MemberProxyService } from '../services/member-proxy.service';
// Enum Services
import { RaceService } from './../services/race.service';
import { NationalityService } from '../services/nationality.service';
import { GenderService } from '../services/gender.service';

// models
import { ParticipantApiModel } from './../models/ParticipantApiModel';
import { MemberApiModel } from '../models/MemberApiModel';




@Component({
  selector: 'app-create-individual',
  templateUrl: './create-individual.component.html',
  styleUrls: [],
  providers: [RaceService, NationalityService, GenderService]

})
export class CreateIndividualComponent implements OnInit {
  //show = "yes";
  member: MemberApiModel;
  participant: ParticipantApiModel

  raceOptions = this.RaceService.raceOptions;
  nationalityOptions = this.NationalityService.nationalityOptions;
  genderOptions = this.GenderService.genderOptions;

  constructor(private MemberProxy: MemberProxyService, private router: Router, private RaceService: RaceService, private NationalityService: NationalityService, private GenderService: GenderService) {
    this.member = new MemberApiModel();
    this.participant = new ParticipantApiModel();
    this.member.participant = this.participant;

  }

  ngOnInit() {
  }

  assignNationality(value: string) {
    this.member.nationality = this.NationalityService.assignNationality(value);
  }

  assignGender(value: string) {
    this.member.gender = this.GenderService.assignGender(value);
  }

  assignRace(value: string) {
    this.member.race = this.RaceService.assignRace(value);
  }

  CreateIndividual() {
    this.MemberProxy.createMember(this.member)
      .subscribe((member) => {
        this.member = member;
       });
    this.router.navigate(["individual-dashboard"]);
  }
}


