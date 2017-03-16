import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { CreateQuestion } from '../models/CreateQuestion';
import { Question } from '../models/Question';
import { QuestionTypeApiModel } from '../models/QuestionTypeApiModel';

@Component({
  selector: 'app-question-create-toggle',
  templateUrl: './question-create-toggle.component.html',
  styleUrls: []
})
export class QuestionCreateToggleComponent implements OnInit {

  questionTextValue: string = "";
  questionTypeValue: string = "";

  @Input() questionTypes: QuestionTypeApiModel[];

  @Input()
  get questionText() {
    return this.questionTextValue;
  }

  @Input()
  get questionType() {
    return this.questionTypeValue;
  }

  @Output() questionTextChange = new EventEmitter();
  set questionText(value: string) {
    this.questionTextValue = value;
    this.questionTextChange.emit(this.questionTextValue);
  }

  @Output() questionTypeChange = new EventEmitter();
  set questionType(value: string) {
    this.questionTypeValue = value;
    this.questionTypeChange.emit(this.questionTypeValue);
  }

  isValid: boolean = false;
  editMode: boolean = true;
  questionModel: Question;

  constructor() { }

  ngOnInit() {
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
  }

}
