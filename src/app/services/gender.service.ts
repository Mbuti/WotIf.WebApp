import { Injectable } from '@angular/core';
import { Gender } from './../models/MemberApiModel';

@Injectable()
export class GenderService {
  Gender: typeof Gender = Gender;
  myGender: Gender;
  genderOptions: string[];

  constructor() {

    var GenderOptions = Object.keys(Gender);
    this.genderOptions = GenderOptions.slice(GenderOptions.length / 2);
  }

  assignGender(value: string): Gender {

    this.myGender = Gender[value];
    return this.myGender;
  }
}
