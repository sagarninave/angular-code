import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'SQUARE'
})
export class SquarePipe implements PipeTransform {

  transform(value: number): number {
    return value*value;
  }

}
