import { Component, OnInit } from '@angular/core';
import { HomepageService } from '../homepage.service';
import { Body } from 'src/app/models/single-language-news-body';
import { TranslateService } from '@ngx-translate/core';

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

        // Make Articles only 20 words length
        this.homepageService.newsList.forEach(news => {
          news.body.forEach(body => {
            body.article = body.article.replace(/(([^\s]+\s\s*){20})(.*)/,"$1…");
            console.log(body.article.length)
          });
        });
      }
    );
  }

}
