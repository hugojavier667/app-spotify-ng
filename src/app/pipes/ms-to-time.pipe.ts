import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'msToTime'
})
export class MsToTimePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    const ms = value % 1000;
    value = (value - ms) / 1000;
    const secs = value % 60;
    value = (value - secs) / 60;
    const mins = value % 60;

    return mins + ':' + (secs < 10 ? '0' + secs : secs);
  }

}
