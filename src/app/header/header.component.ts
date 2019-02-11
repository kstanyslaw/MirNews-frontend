import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isShow: boolean = false;

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'ru']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|ru/) ? browserLang : 'en');
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
