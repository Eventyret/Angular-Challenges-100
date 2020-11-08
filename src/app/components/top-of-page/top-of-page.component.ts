import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-top-of-page',
  templateUrl: './top-of-page.component.html',
  styleUrls: ['./top-of-page.component.scss'],
})
export class TopOfPageComponent {
  constructor(private viewPortScroller: ViewportScroller) {}

  public goToTop(): void {
    this.viewPortScroller.scrollToPosition([0, 0]);
  }
}
