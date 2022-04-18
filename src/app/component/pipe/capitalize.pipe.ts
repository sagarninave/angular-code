import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'CAPITALIZE'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: String): String {
    return value.toUpperCase();
  }
}
