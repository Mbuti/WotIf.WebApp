export class CreateTalent {
    public id: number;
    public TalentDescription: string;
    public YearsExperience: number;
    public sortOrder: number;

    constructor(id: number, talentText: string, talentYears:number, sortOrder: number) {
        this.id = id;
        this.TalentDescription = talentText;
        this.YearsExperience = talentYears;
        this.sortOrder = sortOrder;
    }
}