import { Component, OnInit, Input } from '@angular/core';

// Models
import { Talent } from './../../shared/';

@Component({
  selector: 'app-dynamic-talent',
  templateUrl: './dynamic-talent.component.html'
})
export class DynamicTalentComponent implements OnInit {
  @Input() question: Talent;

  constructor() { }

  ngOnInit() {
  }

}
