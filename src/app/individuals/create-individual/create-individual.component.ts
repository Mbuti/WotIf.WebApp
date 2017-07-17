import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Events
import { TalentChangedEvent } from './../../shared';
import { ParticipantChangedEvent } from './../../shared';

// Services
import { TalentProxyService } from './../../services/talent-proxy.service';
import { MemberProxyService } from './../../services/member-proxy.service';
// Enum Services
import { RaceService } from './.././../services/race.service';
import { NationalityService } from './../../services/nationality.service';
import { GenderService } from './../../services/gender.service';

// models
import { ParticipantApiModel } from './.././../shared';
import { MemberApiModel } from './../../shared';
import { CreateTalent } from './../../shared';
import { CreateParticipant } from './../../shared';
import { TalentApiModel } from './../../shared';

@Component({
  selector: 'app-create-individual',
  templateUrl: './create-individual.component.html',
  providers: [RaceService, NationalityService, GenderService, TalentProxyService]
})
export class CreateIndividualComponent implements OnInit {

  member: MemberApiModel;
  participant: ParticipantApiModel

  hasTalent = false;
  hasParticipant=false;
  talents: CreateTalent[];
  participants: CreateParticipant[];
  nextTalentId: number = 0;
  nextParticipantId: number = 0;

  raceOptions = this.RaceService.raceOptions;
  nationalityOptions = this.NationalityService.nationalityOptions;
  genderOptions = this.GenderService.genderOptions;

  constructor(private MemberProxy: MemberProxyService, private router: Router, private RaceService: RaceService, private NationalityService: NationalityService, private GenderService: GenderService, private talentProxy: TalentProxyService) {
    this.member = new MemberApiModel();
    //this.participant = new ParticipantApiModel();
    //this.member.participant = this.participant;
    //this.member.participant.participantId=-1;

  }

  ngOnInit() {
  }

  removeTalent(talent: CreateTalent): void {
    console.log(this.talents.indexOf(talent));
    this.talents.splice(this.talents.indexOf(talent), 1);
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

   removeParticipant(participant: CreateParticipant): void {
    console.log(this.participants.indexOf(participant));
    this.participants.splice(this.participants.indexOf(participant), 1);
    this.nextParticipantId--;
    if (this.nextParticipantId === 0)
      this.hasParticipant = false;
  }

  addParticipant(): void {
    this.participants.push(new CreateParticipant(this.nextParticipantId, "", "", this.participants.length));
    this.nextParticipantId++;
  }

  addFirstParticipant(): void {
    this.hasParticipant = true;
    this.participants = [new CreateParticipant(0, "", "", 0)];
    this.nextTalentId++;
  }

  participantChanged(participantChangedEvent: ParticipantChangedEvent): void {
    for (let participant of this.participants) {
      if (participant.participantId === participantChangedEvent.participantId) {
        participant.participantDescription = participantChangedEvent.participantDescription;
        participant.participantName = participantChangedEvent.participantName;
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

 /* CreateIndividual() {
    let talents = <TalentApiModel[]>this.talents;
    this.member.talents = talents;
    
    if(this.hasParticipant==false)
      this.member.participant=null;



    console.log( this.member);
    this.MemberProxy.createMember(this.member)
      .subscribe((member) => {
        this.member = member;
      });
    this.router.navigate(["individual-dashboard"]);
  }*/



    CreateIndividual() {
    let talents = <TalentApiModel[]>this.talents;
    this.member.talents = talents;

    let participants = <ParticipantApiModel[]>this.participants;
    this.member.participants = participants;

    console.log( this.member);
    this.MemberProxy.createMember(this.member)
      .subscribe((member) => {
        this.member = member;
      });
    this.router.navigate(["individual-dashboard"]);
  }
}


