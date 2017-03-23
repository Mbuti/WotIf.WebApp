import { Component, OnInit, Input } from '@angular/core';

// Models
import { Talent } from './../../models/Talent';

@Component({
  selector: 'app-dynamic-talent',
  templateUrl: './dynamic-talent.component.html',
  styleUrls: []
})
export class DynamicTalentComponent implements OnInit {
  @Input() question: Talent;

  constructor() { }

  ngOnInit() {
  }

}
