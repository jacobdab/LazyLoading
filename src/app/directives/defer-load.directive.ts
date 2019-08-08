import {AfterViewInit, Directive, ElementRef, EventEmitter, Output} from '@angular/core';

@Directive({
  selector: '[appDeferLoad]'
})
export class DeferLoadDirective implements AfterViewInit {
  @Output() public appDeferLoad: EventEmitter<any> = new EventEmitter();

  private intersectionObserver: IntersectionObserver;

  constructor(private element: ElementRef) {
  }

  public ngAfterViewInit() {
    this.intersectionObserver = new IntersectionObserver(entries => {
      this.checkForIntersection(entries);
    }, {threshold: 0.25});
    this.intersectionObserver.observe(this.element.nativeElement);
  }

  private checkForIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (this.checkIfIntersecting(entry)) {
        this.appDeferLoad.emit();
        this.intersectionObserver.unobserve(this.element.nativeElement);
        this.intersectionObserver.disconnect();
      }
    });
  };

  private checkIfIntersecting(entry: IntersectionObserverEntry) {
    return entry.isIntersecting && entry.target === this.element.nativeElement;
  }
}

