import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[Hostlistener]'
})
export class HostlistenerDirectiveDirective {

  constructor(private eleRef: ElementRef, private renderer: Renderer2) { }
  
  ngOnInit(){
    this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'red'); 
  }

  @HostListener('mouseover') mouseover(eventData: Event){
    this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'red'); 
    this.renderer.setStyle(this.eleRef.nativeElement, 'color', '#000'); 
    this.renderer.setStyle(this.eleRef.nativeElement, 'cursor', 'pointer'); 
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
    this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'blue'); 
    this.renderer.setStyle(this.eleRef.nativeElement, 'color', '#fff'); 
    this.renderer.setStyle(this.eleRef.nativeElement, 'cursor', 'pointer'); 
  }

}
