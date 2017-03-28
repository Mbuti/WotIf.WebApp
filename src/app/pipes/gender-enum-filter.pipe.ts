import { Pipe, PipeTransform } from '@angular/core';
import { Gender } from '../models/MemberApiModel';

@Pipe({
  name: 'genderEnumFilter'
})
export class GenderEnumFilterPipe implements PipeTransform {

  transform(enumMember: any, args?: any): any {
    return Gender[enumMember];
  }

}
