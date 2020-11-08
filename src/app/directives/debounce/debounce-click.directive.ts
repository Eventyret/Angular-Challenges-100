import { Directive, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';

@Directive({
  selector: '[appDebounceClick]',
})
export class DebounceClickDirective implements OnInit, OnDestroy {
  @Output() public debounceclick = new EventEmitter();
  public clicks = new Subject();
  public sub$: Subscription;

  public ngOnInit(): void {
    const debounceTimeinMs = 500;
    this.sub$ = this.clicks
      .pipe(debounceTime(debounceTimeinMs))
      .subscribe((value: any) => this.debounceclick.emit(value));
  }

  public ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }
}
