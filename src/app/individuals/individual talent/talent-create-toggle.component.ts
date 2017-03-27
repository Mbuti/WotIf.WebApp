import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// Events
import { TalentChangedEvent } from './../../events/TalentChangedEvent';

// Models
import { CreateTalent } from './../../models/CreateTalent';
import { Talent } from './../../models/Talent';
//import { TalentTypeApiModel } from '../models/TalentTypeApiModel';

@Component({
  selector: 'app-talent-create-toggle',
  templateUrl: './talent-create-toggle.component.html'
})
export class TalentCreateToggleComponent implements OnInit {
  @Input() id: number;
  // @Input() talentTypes: TalentTypeApiModel[];
  @Output() onChange = new EventEmitter<TalentChangedEvent>();

  isValid: boolean = false;
  editMode: boolean = true;
  talentText: string = "";
  talentYears: number = 0;
  talentModel: Talent;

  constructor() { }

  ngOnInit() {
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
  }

  notifyChange() {
    this.onChange.emit(new TalentChangedEvent(this.id, this.talentText, this.talentYears));
    this.isValid = this.talentText !== "" && this.talentYears !== null;
    this.talentModel = new Talent(this.id, this.talentText, this.talentYears)
  }

}
