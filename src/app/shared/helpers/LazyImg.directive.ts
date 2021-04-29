import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({ selector: 'img' })
export class LazyImgDirective {

  private observer: IntersectionObserver | undefined;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {
    this.observer = new IntersectionObserver( entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // this.renderer.addClass(this.elementRef.nativeElement, 'fadeInAnim');
          console.log(entry.target);

          this.observer.unobserve(entry.target);
        }
      });
    });

    this.observer.observe(this.elementRef.nativeElement as HTMLElement);
  }

}
