import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-credit-card-input',
  templateUrl: './credit-card-input.component.html',
  styleUrls: ['./credit-card-input.component.scss'],
})
export class CreditCardInputComponent {
  private readOnly = false;

  @Input() public creditCardNumber = '';
  @Input() public set isReadOnly(value: boolean) {
    this.readOnly = value;
  }
  public get isReadOnly(): boolean {
    return this.readOnly;
  }
}
