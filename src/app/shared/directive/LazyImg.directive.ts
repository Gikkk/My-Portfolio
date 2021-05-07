import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({ selector: 'img' })
export class LazyImgDirective {

  // image lazy loading with intercetion observer
  private observer: IntersectionObserver | undefined;
  lazyImage;
  options = {
    rootMargin: '150px',
    threshold: 0.2
  };

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {
    this.observer = new IntersectionObserver( entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.lazyImage = entry.target;
          this.lazyImage.src = this.lazyImage.dataset.src

          this.observer.unobserve(entry.target);
        }
      });
    }, this.options);
    this.observer.observe(this.elementRef.nativeElement as HTMLElement);
  }

}
