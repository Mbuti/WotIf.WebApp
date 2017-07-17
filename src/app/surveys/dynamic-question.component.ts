import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

// Models
import { Question } from '../shared';

@Component({
  selector: 'app-dynamic-question',
  templateUrl: './dynamic-question.component.html'
})
export class DynamicQuestionComponent implements OnInit {

  answerValue: any;

  @Input() question: Question;

  @Input()
  get answer() {
    return this.answerValue;
  }

  @Output() answerChange = new EventEmitter();
  set answer(value: any) {
    this.answerValue = value;
    this.answerChange.emit(this.answerValue);
  }

  constructor() { }

  ngOnInit() {
  }

}
