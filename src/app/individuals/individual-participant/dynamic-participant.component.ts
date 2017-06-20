import { Component, OnInit, Input } from '@angular/core';

// Models
import { Participant } from './../../models/Participant';

@Component({
  selector: 'app-dynamic-participant',
  templateUrl: './dynamic-participant.component.html'
})
export class DynamicParticipantComponent implements OnInit {
  @Input() question: Participant;

  constructor() { }

  ngOnInit() {
  }

}
