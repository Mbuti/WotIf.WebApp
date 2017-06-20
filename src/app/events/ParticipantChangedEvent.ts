
export class ParticipantChangedEvent {
    public participantId: number;
    public participantDescription: string;
    public participantName: string;

    constructor(id: number, participantDescription: string, participantName: string) {
        this.participantId = id;
        this.participantDescription = participantDescription;
        this.participantName = participantName;
    }
}