import { Directive, ElementRef } from '@angular/core';
import { StyleBindingComponent } from '../binding/style-binding/style-binding.component';

@Directive({
  selector: '[D1]'
})
export class D1Directive {

  constructor(private elementRef: ElementRef) {
    elementRef.nativeElement.style.backgroundColor = '#6c5ce7';
    elementRef.nativeElement.style.color = '#fff';
    elementRef.nativeElement.style.fontWeight = 'bold'; 
  }

}
