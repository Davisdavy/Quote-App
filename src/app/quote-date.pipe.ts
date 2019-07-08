import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quoteDate'
})
export class QuoteDatePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
