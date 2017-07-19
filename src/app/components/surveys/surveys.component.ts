import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//Models
import { SurveyApiModel } from '../../models';
import { QuestionApiModel } from '../../models';
import { Question } from '../../models';
import { AnsweredQuestionApiModel, SubmitSurveyApiModel } from '../../models';
import { AnswerModel } from '../../models';

// Services
import { SurveyProxyService } from '../../services/survey-proxy.service';

@Component({
  selector: 'app-surveys',
  templateUrl: './surveys.component.html',
  providers: [SurveyProxyService]
})
export class SurveysComponent implements OnInit {
  surveys: Array<SurveyApiModel> = new Array<SurveyApiModel>();
  questions: Array<Question> = new Array<Question>();
  answers: Array<AnswerModel> = new Array<AnswerModel>();
  selectedSurvey: string = "";
  survey: SurveyApiModel;

  constructor(private surveyProxy: SurveyProxyService, private router: Router) { }

  ngOnInit() {
    this.surveyProxy.getSurveys()
      .subscribe((surveys) => {
        this.surveys = surveys;
      });

  }

  selectedSurveyChanged(selectedSurvey: string) {
    this.questions = new Array<Question>();
    this.survey = null;
    this.selectedSurvey = selectedSurvey;
    for (let survey of this.surveys) {
      if (survey.id === +this.selectedSurvey) {
        this.survey = survey;
        break;
      }
    }

    if (this.survey !== null) {
      for (let question of this.survey.questions) {
        this.questions.push(new Question(question.id, question.text, question.type));

        this.answers.push(new AnswerModel(question.id));
      }
    }
  }

  submitSurvey() {
    let answers = new Array<AnsweredQuestionApiModel>()
    for (let answer of this.answers) {
      answers.push(new AnsweredQuestionApiModel(answer.questionId, answer.answer.toString()));
    }
    let completedSurvey = new SubmitSurveyApiModel(this.survey.id, answers);
    console.log (completedSurvey);
    this.router.navigate(["surveys"]);
  /*  this.surveyProxy.submitSurvey(completedSurvey)
      .subscribe(
      result => {
        this.router.navigate(["surveys"])
      },
      error => {this.router.navigate(["surveys"]) }
      );*/
  }

}
