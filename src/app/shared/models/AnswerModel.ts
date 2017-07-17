export class AnswerModel {
    questionId: number;
    answer: any;

    constructor(questionId?: number, answer?: any) {
        this.questionId = questionId;
        this.answer = answer;
    }
}