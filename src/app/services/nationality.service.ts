import { Injectable } from '@angular/core';
import { List } from 'linqts';

// Models
import { Nationality } from './../models/MemberApiModel';

@Injectable()
export class NationalityService {
  Nationality: typeof Nationality = Nationality;
  myNationality: Nationality;
  nationalityOptions: List<string>;

  constructor() {
    var nationalityOptions = Object.keys(Nationality);
    this.nationalityOptions.AddRange(nationalityOptions.slice(nationalityOptions.length / 2));
  }

  assignNationality(value: string): Nationality {
    this.myNationality = Nationality[value];
    return this.myNationality;
  }
}
