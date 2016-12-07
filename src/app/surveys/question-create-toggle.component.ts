import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// Events
import { QuestionChangedEvent } from '../events/QuestionChangedEvent';

// Models
import { CreateQuestion } from '../models/CreateQuestion';
import { Question } from '../models/Question';
import { QuestionTypeApiModel } from '../models/QuestionTypeApiModel';

@Component({
  selector: 'app-question-create-toggle',
  templateUrl: './question-create-toggle.component.html',
  styleUrls: []
})
export class QuestionCreateToggleComponent implements OnInit {
  @Input() id: number;
  @Input() questionTypes: QuestionTypeApiModel[];
  @Output() onChange = new EventEmitter<QuestionChangedEvent>();

  isValid: boolean = false;
  editMode: boolean = true;
  questionText: string = "";
  questionType: string = "";
  questionModel: Question;

  constructor() { }

  ngOnInit() {
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
  }

  notifyChange() {
    this.onChange.emit(new QuestionChangedEvent(this.id, this.questionText, this.questionType));
    this.isValid = this.questionText !== "" && this.questionType !== "";
    this.questionModel = new Question(this.id, this.questionText, this.questionType)
  }

}
