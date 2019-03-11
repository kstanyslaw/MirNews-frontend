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

  pickedDate = new Date(this.today.setDate(1));
  
  constructor(private translate: TranslateService) { }
  
  getMonthName(date: Date) {    // Return long month name of transmitted date in current language
    return date.toLocaleDateString(this.translate.currentLang, {month: 'long'});
  }

  getMonthCalendar(date: Date) {
    var monthArray = [];
    const firstMonthDay = new Date(date.setDate(1));
    const lastMonthDay = new Date(date.setMonth(date.getMonth()+1, 0));
    const offset = (this.translate.currentLang === 'en'
      ? firstMonthDay.getDay()
      : (firstMonthDay.getDay()) === 0
        ? firstMonthDay.getDay() + 6
        : firstMonthDay.getDay() - 1
    );

    var countOffset = offset;
    for (let i = 0; i < (lastMonthDay.getDate() + offset); i += 7) {
      var tempArray = [];
      for (let j = 0; j < 7; j++) {
        if (countOffset > 0) {
          var tempDate = new Day('', '', 'dayClass', true);
          tempArray.push(tempDate);
          countOffset = countOffset - 1;
        } else {
          var tempDate = new Day((i + j + 1 - offset).toString(), '', 'dayClass', true);
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
  ) {}
}