import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[Renderer]'
})
export class RendererDirectiveDirective {

  constructor(private elRef: ElementRef, private r2: Renderer2) { }
   ngOnInit(){
    this.r2.setStyle(this.elRef.nativeElement, 'background-color', '#636e72');
    this.r2.setStyle(this.elRef.nativeElement, 'color', '#fff');
  }
}
