import { ViewportScroller } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-top-of-page',
  templateUrl: './top-of-page.component.html',
  styleUrls: ['./top-of-page.component.scss'],
})
export class TopOfPageComponent {
  @Input() public pxToShow = 400;
  public isShown = false;
  constructor(private viewPortScroller: ViewportScroller) {}

  @HostListener('window:scroll') onWindowScroll(): void {
    const yCoordinate = this.viewPortScroller.getScrollPosition()[1];
    this.isShown = yCoordinate >= this.pxToShow;
  }

  public goToTop(): void {
    this.viewPortScroller.scrollToPosition([0, 0]);
  }
}
