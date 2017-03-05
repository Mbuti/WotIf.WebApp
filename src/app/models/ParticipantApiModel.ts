export class ParticipantApiModel {

    public participantId: number;
    public participantName: string;
    public participantDescription: string;

 constuctor(participantId:number, ParticipantName:string,ParticpantDescription:string){
     this.participantId=participantId;
     this.participantName =ParticipantName;
     this.participantDescription = ParticpantDescription;

 }

}
