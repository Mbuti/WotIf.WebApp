export class CreateQuestion {
    id: number;
    questionText: string;
    questionType: string;
    sortOrder: number;

    constructor(id: number, questionText: string, questionType: string, sortOrder: number) {
        this.id = id;
        this.questionText = questionText;
        this.questionType = questionType;
        this.sortOrder = sortOrder;
    }

}