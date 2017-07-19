import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// Models
import { ParticipantChangedEvent } from '../../../models';
import { CreateParticipant } from '../../../models';
import { Participant } from '../../../models';

@Component({
  selector: 'app-participant-create-toggle',
  templateUrl: './participant-create-toggle.component.html'
})
export class ParticipantCreateToggleComponent implements OnInit {
   @Input() name: string;
  @Input() id: number;
  @Input() description:  string;
 

  @Output() onChange = new EventEmitter<ParticipantChangedEvent>();

  isValid: boolean = false;
  editMode: boolean = true;
  participantName: string = "";  
  participantDescription: string = "";
  participantModel: Participant;
  
  constructor() { }

  ngOnInit() {
    this.participantDescription = this.description;
    this.participantName = this.name;
  }

 

  notifyChange() {
   this.onChange.emit(new ParticipantChangedEvent(this.id, this.participantName, this.participantDescription));
   this.isValid = this.participantName !== "" && this.participantDescription !== "";
   this.participantModel = new Participant(this.id, this.participantName, this.participantDescription)
  }

 /* toggleEditMode() {
    this.editMode = !this.editMode;
  }*/


}
