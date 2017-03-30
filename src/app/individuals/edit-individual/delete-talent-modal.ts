// my-modal.component.ts
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

//Models
import {Talent} from './../../models/Talent'
import { TalentChangedEvent } from '../../events/TalentChangedEvent';

@Component({
  selector: 'delete-talent-modal',
  templateUrl: './delete-talent-modal.html',

  
})
export class deleteTalentModal{
  @Input() years: number;
  @Input() id: number;
  @Input() description:  string;


talentText: string = "";  
  talentYears: number = 0;
  talentModel: Talent;
constructor(){}



ngOnInit(){
this.talentYears = this.years;
this.talentText = this.description;
}





}