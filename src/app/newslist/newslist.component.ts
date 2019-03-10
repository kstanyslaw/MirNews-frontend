import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewslistService } from './newslist.service';
import { TranslateService } from '@ngx-translate/core';
import { Body } from '../models/single-language-news-body';

@Component({
  selector: 'app-newslist',
  templateUrl: './newslist.component.html',
  styleUrls: ['./newslist.component.css']
})
export class NewslistComponent implements OnInit {

  currentPage: number;

  constructor(private route: ActivatedRoute, private newslistService: NewslistService, private translate: TranslateService) { }

  getTitle(newsBody: Body[]) {
    return newsBody.find(x => x.language === this.translate.currentLang).title;
  }

  getBody(newsBody: Body[]) {
    return newsBody.find(x => x.language === this.translate.currentLang);
  }

  getDate(date: string) {
    return new Date(date);
  }

  ngOnInit() {

    this.newslistService.getNewsList().subscribe(
      data => {
        this.newslistService.newsList = data;

        // Make Articles only 20 words length
        this.newslistService.newsList.forEach(news => {
          news.body.forEach(body => {
            body.article = body.article.replace(/(([^\s]+\s\s*){20})(.*)/,"$1…");
            // console.log(body.article.length)
          });
        });
      }
    );

    this.route.queryParams
      .subscribe(params => {
        console.log(params); // {order: "popular"}

        this.currentPage = params.page;
      });
  }

}
