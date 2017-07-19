export class CreateQuestion {
    id: number = 0;
    text: string = "";
    type: string = "";
    sortOrder: number = 0;

    constructor(id?: number, questionText?: string, questionType?: string, sortOrder?: number) {
        this.id = id;
        this.text = questionText;
        this.type = questionType;
        this.sortOrder = sortOrder;
    }

}