export class CreateTalent {
    id: number;
    TalentDescription: string;
    YearsExperience: number;
    sortOrder: number;

    constructor(id: number, talentText: string, talentYears: number, sortOrder: number) {
        this.id = id;
        this.TalentDescription = talentText;
        this.YearsExperience = talentYears;
        this.sortOrder = sortOrder;
    }
}