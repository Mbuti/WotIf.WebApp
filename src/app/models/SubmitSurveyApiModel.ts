import { AnsweredQuestionApiModel } from './AnsweredQuestionApiModel';

export class SubmitSurveyApiModel {
    surveyId: number;
    answers: AnsweredQuestionApiModel[];

    constructor(surveyId?: number, answers?: AnsweredQuestionApiModel[]) {
        this.surveyId = surveyId;
        this.answers = answers;
    }
}