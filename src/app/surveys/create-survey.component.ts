import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Models
import { CreateQuestion } from '../models/CreateQuestion';
import { QuestionTypeApiModel } from '../models/QuestionTypeApiModel';
import { CreateSurveyApiModel } from '../models/CreateSurveyApiModel';
import { AddQuestionApiModel } from '../models/AddQuestionApiModel';

// Services
import { QuestionProxyService } from '../services/question-proxy.service';
import { SurveyProxyService } from '../services/survey-proxy.service';

@Component({
  selector: 'app-create-survey',
  templateUrl: './create-survey.component.html',
  providers: [QuestionProxyService, SurveyProxyService]
})
export class CreateSurveyComponent implements OnInit {

  public surveyApiModel: CreateSurveyApiModel;
  questionTypes: QuestionTypeApiModel[] = [];
  questions: CreateQuestion[] = [new CreateQuestion()];
  nextQuestionId: number = 1;

  constructor(
    private questionProxy: QuestionProxyService,
    private surveyProxy: SurveyProxyService,
    private router: Router) {
    this.surveyApiModel = new CreateSurveyApiModel();
  }

  ngOnInit() {
    this.questionProxy.getQuestionTypes()
      .subscribe((questionTypes) => {
        this.questionTypes = questionTypes;
      });
  }

  moveQuestionUp(question: CreateQuestion): void {
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

  moveQuestionDown(question: CreateQuestion): void {
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

  removeQuestion(question: CreateQuestion): void {
    this.questions.splice(this.questions.indexOf(question), 1);
  }

  addQuestion(): void {
    this.questions.push(new CreateQuestion(this.nextQuestionId, "", "", this.questions.length));
    this.nextQuestionId++;
  }

  validateQuestions(): boolean {
    for (let question of this.questions) {
      if (question.text === undefined || question.text === "" || question.type === undefined || question.type === "") {
        return false;
      }
    }
    return true;
  }

  public createSurvey() {
    let questions = <AddQuestionApiModel[]>this.questions;
    this.surveyApiModel.questions = questions;

    this.surveyProxy.createSurvey(this.surveyApiModel)
      .subscribe(
      result => {
        this.router.navigate(["surveys"]);
      },
      error => { }
      );
  }

}
