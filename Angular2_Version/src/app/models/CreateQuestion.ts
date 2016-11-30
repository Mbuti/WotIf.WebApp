export class CreateQuestion {
    questionText: string;
    questionType: string;
    sortOrder: number;

    constructor(questionText: string, questionType: string, sortOrder: number) {
        this.questionText = questionText;
        this.questionType = questionType;
        this.sortOrder = sortOrder;
    }

}