import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



// Events
import { TalentChangedEvent } from './../../events/TalentChangedEvent';

// Services
import { TalentProxyService } from './../../services/talent-proxy.service';
import { MemberProxyService } from './../../services/member-proxy.service';
// Enum Services
import { RaceService } from './.././../services/race.service';
import { NationalityService } from './../../services/nationality.service';
import { GenderService } from './../../services/gender.service';

// models
import { ParticipantApiModel } from './.././../models/ParticipantApiModel';
import { MemberApiModel } from './../../models/MemberApiModel';
import { CreateTalent } from './../../models/CreateTalent';
import { TalentApiModel } from './../../models/TalentApiModel';



@Component({
  selector: 'app-create-individual',
  templateUrl: './create-individual.component.html',
  styleUrls: [],
  providers: [RaceService, NationalityService, GenderService, TalentProxyService]

})
export class CreateIndividualComponent implements OnInit {

  member: MemberApiModel;
  participant: ParticipantApiModel

  hasTalent = false;

  talents: CreateTalent[];
  nextTalentId: number = 0;

  raceOptions = this.RaceService.raceOptions;
  nationalityOptions = this.NationalityService.nationalityOptions;
  genderOptions = this.GenderService.genderOptions;

  constructor(private MemberProxy: MemberProxyService, private router: Router, private RaceService: RaceService, private NationalityService: NationalityService, private GenderService: GenderService, private talentProxy: TalentProxyService) {
    this.member = new MemberApiModel();
    this.participant = new ParticipantApiModel();
    this.member.participant = this.participant;

  }

  ngOnInit() {
  }


  removeTalent(question: CreateTalent): void {
    this.talents.splice(this.talents.indexOf(question), 1);
    this.nextTalentId--;
    if (this.nextTalentId === 0)
      this.hasTalent = false;

  }

  addTalent(): void {
    this.talents.push(new CreateTalent(this.nextTalentId, "", 0, this.talents.length));
    this.nextTalentId++;
  }

  addFirstTalent(): void {
    this.hasTalent = true;
    this.talents = [new CreateTalent(0, "", 0, 0)];
    this.nextTalentId++;
  }

  talentChanged(talentChangedEvent: TalentChangedEvent): void {
    for (let talent of this.talents) {
      if (talent.id === talentChangedEvent.id) {
        talent.TalentDescription = talentChangedEvent.TalentDescription;
        talent.YearsExperience = talentChangedEvent.YearsExperience;
        break;
      }
    }
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
    let talents = <TalentApiModel[]>this.talents;
    this.member.talents = talents;

    //console.log(talents);
    this.MemberProxy.createMember(this.member)
      .subscribe((member) => {
        this.member = member;
      });
    this.router.navigate(["individual-dashboard"]);
  }
}


