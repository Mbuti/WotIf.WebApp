import { Component, OnInit, Input } from '@angular/core';
import { MemberProxyService } from './../../services/member-proxy.service';
import { CreateIndividualComponent } from './../create-individual/create-individual.component';
import { ActivatedRoute, Params, Router } from '@angular/router';

//Services 
import { RaceService } from './.././../services/race.service';
import { NationalityService } from './../../services/nationality.service';
import { GenderService } from './../../services/gender.service';

// Models
import { MemberApiModel } from './../../models/MemberApiModel';
import { ParticipantApiModel } from './.././../models/ParticipantApiModel';

@Component({
  selector: 'app-edit-individual',
  templateUrl: './edit-individual.component.html',
  providers: [RaceService, NationalityService, GenderService]
})
export class EditIndividualComponent implements OnInit {

  id: number;
  member: MemberApiModel = new MemberApiModel();
  raceOptions = this.RaceService.raceOptions;
  nationalityOptions = this.NationalityService.nationalityOptions;
  genderOptions = this.GenderService.genderOptions;
  participant: ParticipantApiModel;

  constructor(private route: ActivatedRoute, private MemberProxy: MemberProxyService, private router: Router, private RaceService: RaceService, private NationalityService: NationalityService, private GenderService: GenderService) {
    this.participant = new ParticipantApiModel();

    this.id = route.snapshot.params['id'];
    console.log(this.id)
    this.MemberProxy.getMemberById(this.id)
      .subscribe((member) =>
        this.member = member);
  }

  ngOnInit() {
  }

  assignNationality(value: string) {
    this.member.nationality = this.NationalityService.assignNationality(value);
  }

  assignRace(value: string) {
    this.member.race = this.RaceService.assignRace(value);

  }
  assignGender(value: string) {
    this.member.gender = this.GenderService.assignGender(value);
  }
  addParticipant(participant: ParticipantApiModel) {
    this.member.participant = this.participant;
  }

  SaveChanges(id: number, member: MemberApiModel) {
    this.MemberProxy.editMember(this.id, this.member)
      .subscribe((member) =>
        this.member = member);
    console.log(this.member);
    this.router.navigate(["individual-dashboard"]);
  }

}