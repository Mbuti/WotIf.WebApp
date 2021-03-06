import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// Models
import { TalentChangedEvent } from '../../../models';
import { CreateTalent } from '../../../models/';
import { Talent } from '../../../models/';
//import { TalentTypeApiModel } from '../models/TalentTypeApiModel';

@Component({
  selector: 'app-talent-create-toggle',
  templateUrl: './talent-create-toggle.component.html'
})
export class TalentCreateToggleComponent implements OnInit {
   @Input() years: number;
  @Input() id: number;
  @Input() description:  string;
 

  @Output() onChange = new EventEmitter<TalentChangedEvent>();

  isValid: boolean = false;
  editMode: boolean = true;
  talentText: string = "";  
  talentYears: number = 0;
  talentModel: Talent;
  
  constructor() { }

  ngOnInit() {
    this.talentYears = this.years;
    this.talentText = this.description;
  }

 

  notifyChange() {
   this.onChange.emit(new TalentChangedEvent(this.id, this.talentText, this.talentYears));
   this.isValid = this.talentText !== "" && this.talentYears !== null;
   this.talentModel = new Talent(this.id, this.talentText, this.talentYears)
  }

 /* toggleEditMode() {
    this.editMode = !this.editMode;
  }*/


}
