//Never used (probably) - or if it is used, why is it used -.-

export class TalentChangedEvent {
    public id: number;
    public TalentDescription: string;
    public YearsExperience: number;

    constructor(id: number, talentText: string, talentYears: number) {
        this.id = id;
        this.TalentDescription = talentText;
        this.YearsExperience = talentYears;
    }
}