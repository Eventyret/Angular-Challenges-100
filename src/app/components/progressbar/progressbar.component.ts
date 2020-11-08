import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.scss']
})
export class ProgressbarComponent {
  @Input() public value = 0;
  @Input() public max =  100;


}
