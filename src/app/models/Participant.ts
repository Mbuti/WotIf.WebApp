export class Participant {
    public participantId: number;
    public participantName: string;
    public participantDescription: string;

    constructor(participantId: number, ParticipantName: string, ParticpantDescription: string) {
        this.participantId = participantId;
        this.participantName = ParticipantName;
        this.participantDescription = ParticpantDescription;
    }


}