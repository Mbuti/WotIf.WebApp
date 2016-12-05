import { AddQuestionApiModel } from './AddQuestionApiModel';

export class CreateSurveyApiModel {
    public title: string;
    public description: string;
    public questions: AddQuestionApiModel[];
}