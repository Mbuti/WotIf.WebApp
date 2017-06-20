import { ParticipantApiModel } from './ParticipantApiModel';
import { TalentApiModel } from './TalentApiModel';

export class MemberApiModel {
    public id: number;
    public idNumber: string;
    public username: string
    public name: string;
    public surname: string;
    public race: Race;
    public age: number;
    public nationality: Nationality;
    public participant: ParticipantApiModel;
    public gender: Gender;
    public talents: TalentApiModel[];
    public participants: ParticipantApiModel[];

    constuctor(id: number, IdNumber: string, Username: string, Name: string, Surname: string, age: number, nationality: Nationality, race: Race, /*participant: ParticipantApiModel, */gender: Gender) {
        this.id = id;
        this.idNumber = IdNumber;
        this.name = Name;
        this.surname = Surname;
        this.username = Username;
        this.nationality = nationality;
        this.age = age;
        this.race = race;
       // this.participant = participant;
        this.gender = gender;
    }

}

export enum Race {
    Black, White, Coloured, Indian, Other
}

export enum Nationality {
    Zimbabwean, SouthAfrican, Nigerian, Congolese, Other
}

export enum Gender {
    Male, Female
}