import { Pipe, PipeTransform } from '@angular/core';
import { Nationality } from './../models/MemberApiModel';

@Pipe({
  name: 'nationalityEnumFilter'
})
export class NationalityEnumFilterPipe implements PipeTransform {

  transform(enumMember: any, args?: any): any {
    return Nationality[enumMember];
  }

}
