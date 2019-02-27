import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-change-language',
  templateUrl: './change-language.component.html',
  styleUrls: ['./change-language.component.css']
})
export class ChangeLanguageComponent implements OnInit {

  isShow: boolean = false;

  constructor(public translate: TranslateService) {
  }

  getCountryFlag(language: string) {
    if (language === 'en') {
      language = 'us';
    }
    return ('flag-icon-' + language);
  }

  useLanguage(language: string) {
    this.translate.use(language);
    this.isShow = false;
  }

  ngOnInit() {
  }

}
