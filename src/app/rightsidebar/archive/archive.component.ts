import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  today = new Date();
  currentMonth = this.today.getMonth();
  currentYear = this.today.getFullYear();

  pickedDate = new Date(this.today);

  monthesNumberArray = [
    [12, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [9, 10, 11]
  ]

  showMonthes = false;
  showYears = false;

  constructor(private translate: TranslateService) { }

  onPickMonth(monthNumber: number) {
    this.pickedDate.setMonth(monthNumber);
    this.showMonthes = false;
    this.showYears = false;
  }

  getMonthName(date?: Date, monthNumber?: number) {    // Return long month name of transmitted date in current language
    if(date) return date.toLocaleDateString(this.translate.currentLang, { month: 'long' });
    if(monthNumber) return (new Date(1970, monthNumber,)).toLocaleDateString(this.translate.currentLang, { month: 'long' });
  }

  getMonthCalendar(date: Date) {
    const todayDate = (new Date()).getDate();

    var monthArray = [];

    const firstMonthDay = new Date(new Date(date).setDate(1));
    const lastMonthDay = new Date(new Date(date).setMonth(date.getMonth() + 1, 0));
    const offset = (this.translate.currentLang === 'en'
      ? firstMonthDay.getDay()
      : (firstMonthDay.getDay()) === 0
        ? firstMonthDay.getDay() + 6
        : firstMonthDay.getDay() - 1
    );

    var isToday = (this.today.getMonth() === date.getMonth() && this.today.getFullYear() === date.getFullYear()
      ? true
      : false
    );

    var countOffset = offset;
    for (let i = 0; i < (lastMonthDay.getDate() + offset); i += 7) {
      var tempArray = [];
      for (let j = 0; j < 7; j++) {
        if (countOffset > 0) {
          var tempDate = new Day('', '', 'offset', true);
          tempArray.push(tempDate);
          countOffset = countOffset - 1;
        } else {
          var tempDate = new Day(
            (i + j + 1 - offset).toString(),
            '',
            'day ' + this.translate.currentLang,
            true
          );

          if (+tempDate.date === this.pickedDate.getDate()) {
            tempDate.dayClass = tempDate.dayClass + ' picked';
          }

          if (isToday === true) {
            if (+tempDate.date === todayDate) {
              tempDate.dayClass = tempDate.dayClass + ' today';
            }
            if (+tempDate.date > todayDate) {
              tempDate.dayClass = tempDate.dayClass + ' text-muted';
            } else {
              tempDate.dayClass = tempDate.dayClass + ' yesterday';
            }
          } else {
            tempDate.dayClass = tempDate.dayClass + ' yesterday';
          }

          if (+tempDate.date <= lastMonthDay.getDate()) {
            tempArray.push(tempDate);
          }
        }
      }
      monthArray.push(tempArray);
    }

    return monthArray;
  }

  ngOnInit() {
  }

}

class Day {
  constructor(
    public date: string,
    url: string,
    public dayClass: string,
    public isDisable: boolean
  ) { }
}