import { Component, OnInit, Input } from '@angular/core';

// Models
import { Question } from '../models/Question';

@Component({
  selector: 'app-dynamic-question',
  templateUrl: './dynamic-question.component.html',
  styleUrls: []
})
export class DynamicQuestionComponent implements OnInit {
  @Input() question: Question;

  constructor() { }

  ngOnInit() {
  }

}
