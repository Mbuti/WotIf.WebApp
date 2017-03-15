import { Component, OnInit } from '@angular/core';
import { List } from 'linqts';

//Models
import { SurveyApiModel } from '../models/SurveyApiModel';
import { Survey } from '../models/Survey';
import { QuestionApiModel } from '../models/QuestionApiModel';

// Services
import { SurveyProxyService } from '../services/survey-proxy.service';

@Component({
  selector: 'app-surveys',
  templateUrl: './surveys.component.html',
  providers: [SurveyProxyService]
})
export class SurveysComponent implements OnInit {
  surveys: List<Survey> = new List<Survey>();

  questions: List<QuestionApiModel> = new List<QuestionApiModel>();
  selectedSurvey: string = "";
  survey: SurveyApiModel;

  constructor(private surveyProxy: SurveyProxyService) { }

  ngOnInit() {
    this.surveyProxy.getSurveys()
      .subscribe((surveys) => {
        this.surveys = new List<SurveyApiModel>(surveys).Select(s => s.questions = new List<QuestionApiModel>(s.questions))
      });
  }

  selectedSurveyChanged(selectedSurvey: string) {
    this.questions = new List<Question>();
    this.survey = null;
    this.selectedSurvey = selectedSurvey;

    this.survey = this.surveys.FirstOrDefault(s => s.id === +this.selectedSurvey);

    if (this.survey !== null) {
      console.log(this.surveys);
      let questions = this.survey.questions.Select(q => new Question(q.id, q.text, q.type)).ToArray();
      this.bindQuestions = questions;
    }
  }

}
