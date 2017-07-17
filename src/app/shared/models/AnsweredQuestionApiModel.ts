export class AnsweredQuestionApiModel {
    questionId: number;
    answer: string;

    constructor(questionId?: number, answer?: string) {
        this.questionId = questionId;
        this.answer = answer;
    }
}