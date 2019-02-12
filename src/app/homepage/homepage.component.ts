import { Component, OnInit } from '@angular/core';

import { HomepageService } from './homepage.service';
import { TranslateService } from '@ngx-translate/core';

import { Body } from '../models/single-language-news-body';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private homepageService: HomepageService, private translate: TranslateService) { }

  getTitle(newsBody: Body[]) {
    return newsBody.find(x => x.language === this.translate.currentLang).title;
  }

  getBody(newsBody: Body[]) {
    return newsBody.find(x => x.language === this.translate.currentLang);
  }

  ngOnInit() {
    this.homepageService.getNewsList().subscribe(
      data => {
        console.log(data);
        this.homepageService.newsList = data;
      }
    );

      console.log(new Date('2019-02-09T04:11:00.000Z'));
  }

}
