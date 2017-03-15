import { Component, OnInit } from '@angular/core';

//Models
import { SurveyApiModel } from '../models/SurveyApiModel';
import { QuestionApiModel } from '../models/QuestionApiModel';
import { Question } from '../models/Question';

// Services
import { SurveyProxyService } from '../services/survey-proxy.service';

@Component({
  selector: 'app-surveys',
  templateUrl: './surveys.component.html',
  styleUrls: [],
  providers: [SurveyProxyService]
})
export class SurveysComponent implements OnInit {
  surveys: Array<SurveyApiModel> = new Array<SurveyApiModel>();
  questions: Array<Question> = new Array<Question>();
  selectedSurvey: string = "";
  survey: SurveyApiModel;

  constructor(private surveyProxy: SurveyProxyService) { }

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
      }
    }
  }

}
