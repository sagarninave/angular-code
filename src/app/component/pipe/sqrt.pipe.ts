import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'SQRT'
})
export class SqrtPipe implements PipeTransform {

  transform(value: number): number {
    return Math.sqrt(value);
  }

}
