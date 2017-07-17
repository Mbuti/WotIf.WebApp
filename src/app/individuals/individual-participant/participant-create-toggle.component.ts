import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// Events
import { ParticipantChangedEvent } from '../../shared';

// Models
import { CreateParticipant } from '../../shared/';
import { Participant } from '../../shared/';

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
