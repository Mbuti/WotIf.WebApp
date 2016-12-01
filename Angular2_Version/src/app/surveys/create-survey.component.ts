import { Component, OnInit } from '@angular/core';

// Events
import { QuestionChangedEvent } from '../events/QuestionChangedEvent';

// Models
import { CreateQuestion } from '../models/CreateQuestion';
import { QuestionTypeApiModel } from '../models/QuestionTypeApiModel';

// Services
import { QuestionProxyService } from '../services/question-proxy.service';

@Component({
  selector: 'app-create-survey',
  templateUrl: './create-survey.component.html',
  styleUrls: [],
  providers: [QuestionProxyService]
})
export class CreateSurveyComponent implements OnInit {
  questionTypes: QuestionTypeApiModel[] = [];
  questions: CreateQuestion[] = [new CreateQuestion(0, "", "", 0)];
  nextQuestionId: number = 1;

  constructor(private questionProxy: QuestionProxyService) { }

  ngOnInit() {
    this.questionProxy.getQuestionTypes()
      .subscribe((questionTypes) => {
        this.questionTypes = questionTypes;
      });
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
      if (question.id === questionChangedEvent.id) {
        question.questionText = questionChangedEvent.questionText;
        question.questionType = questionChangedEvent.questionType;
        break;
      }
    }
  }
}
