import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// Events
import { QuestionChangedEvent } from '../events/QuestionChangedEvent';

// Models
import { CreateQuestion } from '../models/CreateQuestion';
import { Question } from '../models/Question';

@Component({
  selector: 'app-question-create-toggle',
  templateUrl: './question-create-toggle.component.html',
  styleUrls: []
})
export class QuestionCreateToggleComponent implements OnInit {
  @Input() question: CreateQuestion;
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
    this.onChange.emit(new QuestionChangedEvent(this.question.id, this.questionText, this.questionType));
    this.isValid = this.questionText !== "" && this.questionType !== "";
    this.questionModel = new Question(this.question.id, this.questionText, this.question.questionType)
  }

}
