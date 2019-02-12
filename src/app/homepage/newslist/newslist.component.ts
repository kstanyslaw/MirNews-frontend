import { Component, OnInit } from '@angular/core';
import { HomepageService } from '../homepage.service';
import { TranslateService } from '@ngx-translate/core';
import { Body } from 'src/app/models/single-language-news-body';

@Component({
  selector: 'app-newslist',
  templateUrl: './newslist.component.html',
  styleUrls: ['./newslist.component.css']
})
export class NewslistComponent implements OnInit {

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
        this.homepageService.newsList = data;
      }
    );
  }

}
