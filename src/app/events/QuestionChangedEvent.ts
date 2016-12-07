export class QuestionChangedEvent {
    public id: number;
    public questionText: string;
    public questionType: string;

    constructor(id: number, questionText: string, questionType: string) {
        this.id = id;
        this.questionText = questionText;
        this.questionType = questionType;
    }
}