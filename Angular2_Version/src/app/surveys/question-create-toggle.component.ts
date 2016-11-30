import { Component, OnInit, Input } from '@angular/core';

// Models
import { CreateQuestion } from '../models/CreateQuestion';

@Component({
  selector: 'app-question-create-toggle',
  templateUrl: './question-create-toggle.component.html',
  styleUrls: []
})
export class QuestionCreateToggleComponent implements OnInit {
  @Input() question: CreateQuestion;

  editMode: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
  }

}
