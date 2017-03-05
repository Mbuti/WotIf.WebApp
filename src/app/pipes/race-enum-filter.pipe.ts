import { Pipe, PipeTransform } from '@angular/core';
import {Race} from './../models/MemberApiModel';

@Pipe({
  name: 'raceEnumFilter'
})
export class RaceEnumFilterPipe implements PipeTransform {

  transform(enumMember: any, args?: any): any {
    return Race[enumMember];
  }

}


