export class SubmitSurveyApiModel {
    surveyId: number;
    answers: AnsweredQuestionApiModel[];

    constructor(surveyId?: number, answers?: AnsweredQuestionApiModel[]) {
        this.surveyId = surveyId;
        this.answers = answers;
    }
}

export class AnsweredQuestionApiModel {
    questionId: number;
    answer: string;

    constructor(questionId?: number, answer?: string) {
        this.questionId = questionId;
        this.answer = answer;
    }
}