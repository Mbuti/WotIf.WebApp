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
  surveys: SurveyApiModel[] = [];
  questions: Question[] = [];
  selectedSurvey: number;

  constructor(private surveyProxy: SurveyProxyService) { }

  ngOnInit() {
    this.surveyProxy.getSurveys()
      .subscribe((surveys) => {
        this.surveys = surveys;
        console.log(this.surveys);
      });
  }

  selectedSurveyChanged(selectedSurvey: number) {
    // this.selectedSurvey = selectedSurvey;
    // var surveyThing: SurveyApiModel;
    // for (let survey of this.surveys) {
    //   console.log(survey);
    //   console.log(survey.surveyId);
    //   if (survey.surveyId === this.selectedSurvey) {
    //     surveyThing = survey;
    //     console.log("found");
    //     break;
    //   }
    // }

    // for (let question of surveyThing.questions) {
    //   this.questions.push(new Question(question.questionId, question.text, question.type));
    // }

    this.questions.push(new Question(1, "Question 1", "YesNo"));
    this.questions.push(new Question(1, "Question 2", "Text"));
  }

}
