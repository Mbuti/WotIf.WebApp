// Models
import { QuestionApiModel } from './QuestionApiModel';

export class SurveyApiModel {
    public id: number;
    public title: string;
    public description: string;
    public date: Date;
    public questions: QuestionApiModel[];
}