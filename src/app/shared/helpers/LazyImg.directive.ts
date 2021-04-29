import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({ selector: 'img' })
export class LazyImgDirective {
  constructor(private renderer: Renderer2, private elementRef: ElementRef) {
    this.renderer.addClass(this.elementRef.nativeElement, 'wild');
  }
}
