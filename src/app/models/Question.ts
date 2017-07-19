export class Question {
    public id: number;
    public text: string;
    public type: string;

    constructor(id: number, questionText: string, questionType: string) {
        this.id = id;
        this.text = questionText;
        this.type = questionType;
    }
}