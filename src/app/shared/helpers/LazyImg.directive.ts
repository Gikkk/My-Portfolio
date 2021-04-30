import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({ selector: 'img' })
export class LazyImgDirective {

  private observer: IntersectionObserver | undefined;
  lazyImage;


  constructor(private renderer: Renderer2, private elementRef: ElementRef) {
    this.observer = new IntersectionObserver( entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.lazyImage = entry.target;
          this.lazyImage.src = this.lazyImage.dataset.src

          this.observer.unobserve(entry.target);
        }
      });
    });

    this.observer.observe(this.elementRef.nativeElement as HTMLElement);
  }

}
