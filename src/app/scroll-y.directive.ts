import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollY]'
})
export class ScrollYDirective {

  constructor( private element: ElementRef, private renderer: Renderer2) { }
  // @HostListener('mouseenter') onmouseenter() {
  //   this.renderer.setStyle(this.element.nativeElement, 'background', 'white');
  // }
  // @HostListener('mouseleave') mouseleave() {
  //   this.renderer.setStyle(this.element.nativeElement, 'background', 'white');
  // }
  @HostListener('window:scroll') onmouseenter() {
    this.renderer.setStyle(this.element.nativeElement, 'background', 'white');
  }
  
}
