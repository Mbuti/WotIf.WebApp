import { Injectable } from '@angular/core';

import { Nationality } from '../models';

@Injectable()
export class NationalityService {
  Nationality: typeof Nationality = Nationality;
  myNationality: Nationality;
  nationalityOptions: string[];

  constructor() {

    var nationalityOptions = Object.keys(Nationality);
    this.nationalityOptions = nationalityOptions.slice(nationalityOptions.length / 2);
  }

  assignNationality(value: string): Nationality {

    this.myNationality = Nationality[value];
    return this.myNationality;
  }
}
