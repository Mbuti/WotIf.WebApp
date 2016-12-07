import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

// Events
import { QuestionChangedEvent } from '../events/QuestionChangedEvent';

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
  styleUrls: [],
  providers: [QuestionProxyService, SurveyProxyService]
})
export class CreateSurveyComponent implements OnInit {
  form: FormGroup;
  questionTypes: QuestionTypeApiModel[] = [];
  questions: CreateQuestion[] = [new CreateQuestion(0, "", "", 0)];
  nextQuestionId: number = 1;

  constructor(
    private formBuilder: FormBuilder,
    private questionProxy: QuestionProxyService,
    private surveyProxy: SurveyProxyService) {
    this.form = formBuilder.group({
      title: [null, [Validators.required]],
      description: [null, [Validators.required]]
    });
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

  questionChanged(questionChangedEvent: QuestionChangedEvent): void {
    for (let question of this.questions) {
      if (question.id === questionChangedEvent.id) {
        question.text = questionChangedEvent.questionText;
        question.type = questionChangedEvent.questionType;
        break;
      }
    }
  }

  validateQuestions(): boolean {
    for (let question of this.questions) {
      if (question.text === "" || question.type === "") {
        return false;
      }
    }
    return true;
  }

  submitForm(formData: CreateSurveyApiModel) {
    let survey = formData;
    let questions = <AddQuestionApiModel[]>this.questions;
    survey.questions = questions;

    this.surveyProxy.createSurvey(survey)
    .subscribe(() => {});
  }
}
