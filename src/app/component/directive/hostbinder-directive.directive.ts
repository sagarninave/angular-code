import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[Hostbinder]'
})
export class HostbinderDirectiveDirective {

  constructor() { }
  
  @HostBinding('style.backgroundColor') backgorundColor:string = "red";
  @HostBinding('style.color') color:string = "#fff";
  
  @HostListener('mouseover') mouseover(eventData: Event){
    this.backgorundColor = 'blue';
    this.color = 'yellow';
  } 

  @HostListener('mouseleave') mouseleave(eventData: Event){
    this.backgorundColor = 'yellow;';
    this.color = 'coral';
  } 
}
