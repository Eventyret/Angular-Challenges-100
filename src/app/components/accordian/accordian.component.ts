import { Component, Input } from '@angular/core';
import { AccordianItem} from '../../models/accordian.models';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.scss'],
})
export class AccordianComponent {
  @Input() public items: AccordianItem[] = [];
}
