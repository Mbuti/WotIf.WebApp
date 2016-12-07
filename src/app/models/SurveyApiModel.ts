// Models
import { QuestionApiModel } from './QuestionApiModel';

export class SurveyApiModel {
    public surveyId: number;
    public title: string;
    public description: string;
    public date: Date;
    public questions: QuestionApiModel[];
}