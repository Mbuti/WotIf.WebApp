export class CreateParticipant {
    public participantId: number;
    public participantDescription: string;
    //public YearsExperience: number;
    public participantName: string
    public sortOrder: number;

    constructor(id: number, participantText: string, participantName: string, sortOrder: number) {
        this.participantId = id;
        this.participantDescription = participantText;
        this.participantName = participantName;
        this.sortOrder = sortOrder;
    }
}



