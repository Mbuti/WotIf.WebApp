import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

// Events
import { TalentChangedEvent } from '../../events/TalentChangedEvent';

//Services 
import { RaceService } from '../../services/race.service';
import { NationalityService } from '../../services/nationality.service';
import { GenderService } from '../../services/gender.service';
import { TalentProxyService } from '../../services/talent-proxy.service';
import { MemberProxyService } from '../../services/member-proxy.service';
import { CreateIndividualComponent } from '../create-individual/create-individual.component';

// Models
import { MemberApiModel } from '../../models/MemberApiModel';
import { ParticipantApiModel } from '../../models/ParticipantApiModel';
import { CreateTalent } from '../../models/CreateTalent';
import { TalentApiModel } from '../../models/TalentApiModel';


@Component({
  selector: 'app-edit-individual',
  templateUrl: './edit-individual.component.html',
  providers: [RaceService, NationalityService, GenderService]
})
export class EditIndividualComponent implements OnInit {
 
  id: number;
  member: MemberApiModel = new MemberApiModel();
  talents: Array<CreateTalent> = new Array<CreateTalent>() ;
  
  //alteredTalents: Array<CreateTalent> = new Array<CreateTalent>() ;
  //alteredTalents: CreateTalent[] ;
 // hasTalent = true;
  nextTalentId: number = 0;



  raceOptions = this.RaceService.raceOptions;
  nationalityOptions = this.NationalityService.nationalityOptions;
  genderOptions = this.GenderService.genderOptions;
  participant: ParticipantApiModel;

  constructor(private route: ActivatedRoute, private MemberProxy: MemberProxyService, private router: Router, private RaceService: RaceService, private NationalityService: NationalityService, private GenderService: GenderService) {
    this.participant = new ParticipantApiModel();


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




removeTalent(question: CreateTalent, talentId:number): void {
  console.log(talentId);
    this.MemberProxy.removeTalent(talentId);
    this.talents.splice(this.talents.indexOf(question), 1);
    this.nextTalentId--;
    
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
    console.log(this.member);
     let talents = <TalentApiModel[]>this.talents;
     this.member.talents = talents;
     
    this.MemberProxy.editMember(this.id, this.member)
      .subscribe((member) => this.member = member);
        
   // console.log(this.member);
    this.router.navigate(["individual-dashboard"]);
  }










}