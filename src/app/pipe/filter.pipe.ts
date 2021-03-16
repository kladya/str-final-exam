import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../model/user';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[] | User[] | null, phrase: string, key: string | number): any[] | User[] | null {
    if (!Array.isArray(value) || !phrase || !key) {
      return value;
    }
    
    phrase = typeof phrase !== 'number' ? ('' + phrase).toLowerCase() : phrase;

    return value.filter(item => {
      if (typeof item[key] === 'number' && typeof phrase === 'number') {
        return item[key] === phrase;
      }

      return ('' + item[key]).toLowerCase().includes((phrase as string));
    });

  }

}
