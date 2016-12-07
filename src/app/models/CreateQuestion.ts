export class CreateQuestion {
    id: number;
    text: string;
    type: string;
    sortOrder: number;

    constructor(id: number, questionText: string, questionType: string, sortOrder: number) {
        this.id = id;
        this.text = questionText;
        this.type = questionType;
        this.sortOrder = sortOrder;
    }

}