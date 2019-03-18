import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(dateJson: string, language?: string): string {
    var date = new Date(dateJson);
    var now = new Date;
    var dateGap = (+now - +date)/(1000*3600);
    if (dateGap < 1) {                                          // If difference between receved time and current time les than one hour
      dateGap = dateGap * 60;                                   // Convert to minutes
      if (dateGap < 1) {                                        // If difference between receved time and current time les than one minute
        if (language === 'en') {
          return (' just now')
        }
        if (language === 'ru') {
          return (' только что')
        }
      }
      if (language === 'en') {
        return (' ' + dateGap.toFixed(0) + ' minutes ago')
      }
      if (language === 'ru') {
        return (' ' + dateGap.toFixed(0) + ' минуты назад')
      }
    }
    if (dateGap < 4) {                                          // If difference between receved time and current time les than 4 hours
      if (language === 'en') {
        return (' ' + dateGap.toFixed(0) + ' hours ago')
      }
      if (language === 'ru') {
        return (' ' + dateGap.toFixed(0) + ' часа назад')
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
