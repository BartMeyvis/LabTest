import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeDiff',
})
export class TimeDiffPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    let date1 = new Date(value);
    let date2 = new Date(args ? args : new Date());
    let diffInYears = Math.floor(
      (date2.getTime() - date1.getTime()) / (1000 * 60 * 60 * 24 * 365.25)
    );
    let diffInMonths = Math.floor(
      (date2.getTime() - date1.getTime()) / (1000 * 60 * 60 * 24 * 30.44)
    );
    let years =
      diffInYears > 1 ? diffInYears + ' years' : diffInYears + ' year';
    let months =
      diffInMonths % 12 > 1
        ? (diffInMonths % 12) + ' months'
        : (diffInMonths % 12) + ' month';
    return diffInYears > 0 ? years : months;
  }
}
