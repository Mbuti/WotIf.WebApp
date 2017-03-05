import { Injectable } from '@angular/core';
import { Race } from './../models/MemberApiModel';


@Injectable()
export class RaceService {
  Race: typeof Race = Race;
  raceOptions;
  myRace: Race;
  constructor() {
    var raceOptions = Object.keys(Race);
    this.raceOptions = raceOptions.slice(raceOptions.length / 2);
  }

  assignRace(value: string): Race {

    this.myRace = Race[value];
    return this.myRace;
    //this.member.race =this.myRace ;
  }
}