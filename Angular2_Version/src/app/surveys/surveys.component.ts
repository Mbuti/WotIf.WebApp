import { Component, OnInit } from '@angular/core';

// Events
import { QuestionChangedEvent } from '../events/QuestionChangedEvent';

// Models
import { CreateQuestion } from '../models/CreateQuestion';

@Component({
  selector: 'app-surveys',
  templateUrl: './surveys.component.html',
  styleUrls: []
})
export class SurveysComponent implements OnInit {
  questions: CreateQuestion[] = [new CreateQuestion(0, "", "", 0)]
  nextQuestionId: number = 1;

  constructor() { }

  ngOnInit() {
  }

  moveQuestionUp(question: CreateQuestion) {
    let index = this.questions.indexOf(question);
    this.questions[index].sortOrder--;
    this.questions[index - 1].sortOrder++;

    this.questions.sort(function (a: CreateQuestion, b: CreateQuestion) {
      if (a.sortOrder < b.sortOrder) {
        return -1;
      }
      return 1;
    });
  }

  moveQuestionDown(question: CreateQuestion) {
    let index = this.questions.indexOf(question);
    this.questions[index].sortOrder++;
    this.questions[index + 1].sortOrder--;

    this.questions.sort(function (a: CreateQuestion, b: CreateQuestion) {
      if (a.sortOrder < b.sortOrder) {
        return -1;
      }
      return 1;
    });
  }

  removeQuestion(question: CreateQuestion) {
    this.questions.splice(this.questions.indexOf(question), 1);
  }

  addQuestion() {
    this.questions.push(new CreateQuestion(this.nextQuestionId, "", "", this.questions.length));
    this.nextQuestionId++;
  }

  questionChanged(questionChangedEvent: QuestionChangedEvent) {
    for (let question of this.questions) {
      console.log("here?");
      if (question.id === questionChangedEvent.id) {
        question.questionText = questionChangedEvent.questionText;
        question.questionType = questionChangedEvent.questionType;
        break;
      }
    }
  }

}
