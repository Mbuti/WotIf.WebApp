import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { List } from 'linqts';

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
  form: FormGroup;
  questionTypes: List<QuestionTypeApiModel> = new List<QuestionTypeApiModel>();
  questions: List<CreateQuestion>;
  nextQuestionId: number = 1;

  constructor(
    private formBuilder: FormBuilder,
    private questionProxy: QuestionProxyService,
    private surveyProxy: SurveyProxyService) {
    // Dummy question
    this.questions.Add(new CreateQuestion(0, "", "", 0));

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
    this.questions.First(q => q.sortOrder === question.sortOrder - 1).sortOrder++;
    question.sortOrder--;
    this.questions.OrderBy(q => q.sortOrder);
  }

  moveQuestionDown(question: CreateQuestion): void {
    this.questions.First(q => q.sortOrder === question.sortOrder + 1).sortOrder--;
    question.sortOrder++;
    this.questions.OrderBy(q => q.sortOrder);
  }

  removeQuestion(question: CreateQuestion): void {
    this.questions.Remove(question);
  }

  addQuestion(): void {
    this.questions.Add(new CreateQuestion(this.nextQuestionId, "", "", this.questions.Count()));
    this.nextQuestionId++;
  }

  validateQuestions(): boolean {
    return this.questions.All(q => q.text !== "" && q.type !== "");
  }

  submitForm(formData: CreateSurveyApiModel) {
    let survey = formData;
    let questions = <List<AddQuestionApiModel>>this.questions;
    survey.questions = questions;

    this.surveyProxy.createSurvey(survey)
      .subscribe(() => { });
  }

}
