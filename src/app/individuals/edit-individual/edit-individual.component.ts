import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

// Events
import { TalentChangedEvent } from '../../shared';

//Services 
import { RaceService } from '../../services/race.service';
import { NationalityService } from '../../services/nationality.service';
import { GenderService } from '../../services/gender.service';
import { TalentProxyService } from '../../services/talent-proxy.service';
import { MemberProxyService } from '../../services/member-proxy.service';
import { CreateIndividualComponent } from '../create-individual/create-individual.component';

// Models
import { MemberApiModel } from '../../shared';
import { ParticipantApiModel } from '../../shared';
import { CreateTalent } from '../../shared';
import { TalentApiModel } from '../../shared';


@Component({
  selector: 'app-edit-individual',
  templateUrl: './edit-individual.component.html',
  providers: [RaceService, NationalityService, GenderService]
})
export class EditIndividualComponent implements OnInit {
 
  id: number;
  member: MemberApiModel = new MemberApiModel();
  talents: Array<CreateTalent> = new Array<CreateTalent>() ;
  

  nextTalentId: number = 0;

  talaentRemovalID: number;
  talentRemovalDescription: string;
  talentRemovalYears: number;


  raceOptions = this.RaceService.raceOptions;
  nationalityOptions = this.NationalityService.nationalityOptions;
  genderOptions = this.GenderService.genderOptions;
  participant: ParticipantApiModel;

  constructor(private route: ActivatedRoute, private MemberProxy: MemberProxyService, private router: Router, private RaceService: RaceService, private NationalityService: NationalityService, private GenderService: GenderService) {
    this.participant = new ParticipantApiModel();
    this.participant.participantId=4;


    this.id = route.snapshot.params['id'];
  
 
    this.MemberProxy.getMemberById(this.id).subscribe((member) => this.member = member);
    this.MemberProxy.getTalentsByID(this.id).subscribe((talents) => this.talents = talents);
    this.nextTalentId=this.talents.length;
  }

  ngOnInit() {
     this.nextTalentId=this.talents.length;
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




removeTalent(talentId:number): void {
  console.log(talentId);
    this.MemberProxy.removeTalent(talentId);
    
}



activateRemovalModal(talentId:number,talentYears:number,talentDescription:string)
{
  this.talaentRemovalID=talentId;
  this.talentRemovalDescription=talentDescription;
  this.talentRemovalYears=talentYears;
}

  addTalent(): void {
    this.talents.push(new CreateTalent(this.nextTalentId, "",0,  this.talents.length));
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



  SaveChanges(id: number, member: MemberApiModel) {
   // console.log(this.member);
     let talents = <TalentApiModel[]>this.talents;
     this.member.talents = talents;
     this.member.participant =this.participant;
    this.MemberProxy.editMember(this.id, this.member)
      .subscribe((member) => this.member = member);
        
   // console.log(this.member);
    this.router.navigate(["individual-dashboard"]);
  }










}