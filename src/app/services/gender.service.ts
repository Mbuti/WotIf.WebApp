import { Injectable } from '@angular/core';
import { List } from 'linqts';

// Models
import { Gender } from './../models/MemberApiModel';

@Injectable()
export class GenderService {
  Gender: typeof Gender = Gender;
  myGender: Gender;
  genderOptions: List<string>;

  constructor() {
    let genderOptions = Object.keys(Gender);
    let genderArray = genderOptions.slice(genderOptions.length / 2);
    this.genderOptions.AddRange(genderArray);
  }

  assignGender(value: string): Gender {
    this.myGender = Gender[value];
    return this.myGender;
  }
}
