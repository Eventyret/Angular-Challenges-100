import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'credircardFormatter'
})
export class CredircardFormatterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
