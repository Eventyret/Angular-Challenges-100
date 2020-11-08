import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flatten',
})
export class FlattenPipe implements PipeTransform {}
