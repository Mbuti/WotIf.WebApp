import { List } from 'linqts';

// Models
import { QuestionApiModel } from './QuestionApiModel';

export class Survey {
    public id: number;
    public title: string;
    public description: string;
    public date: Date;
    public questions: List<QuestionApiModel>;
}