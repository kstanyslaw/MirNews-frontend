import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(dateJson: string, language?: string): string {
    var date = new Date(dateJson);
    var now = new Date;
    var dateGap = (+now - +date)/(1000*3600);
    if (dateGap < 4) {
      if (language === 'en') {
        return ('Last' + dateGap + 'hours')
      }
      if (language === 'ru') {
        return ('Last' + dateGap + 'hours')
      }
    } else {
      if (language === 'en') {
        return date.toLocaleString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          hour12: true
        })
        
      }
      if (language === 'ru') {
        return date.toLocaleString('ru', {
          day: 'numeric',
          month: 'numeric',
          year: 'numeric',
          hour: 'numeric',
          minute: 'numeric'
        })
      }
      return date.toString();
    }
  }

}
