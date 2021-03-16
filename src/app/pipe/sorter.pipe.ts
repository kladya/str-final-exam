import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../model/user';

@Pipe({
  name: 'sorter'
})
export class SorterPipe implements PipeTransform {

  transform(value: any[] | User[] | null, key: string): any[] | User[] | null {
    if (!Array.isArray(value) || key === '') {
      return value;
    }
    return value.sort(function(a, b): number {
      let keyA = a[key];
      let keyB = b[key];
      if (typeof keyA === 'number' && typeof keyB === 'number') {
        return keyA - keyB;
      }
      keyA = ('' + keyA).toLowerCase();
      keyB = ('' + keyB).toLowerCase();
      return keyA.localeCompare(keyB);
    });
  }

}
