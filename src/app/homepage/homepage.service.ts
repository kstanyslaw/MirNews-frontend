import { Injectable } from '@angular/core';

import { News } from "../models/news";
import { Body } from '../models/single-language-news-body';

@Injectable()
export class HomepageService {

  newsList: News[] = [];

  constructor() { }

  getNewsList() {

    const testBody = [
      new Body(
        'ru',
        'Тестовый заголовок',
        'Тестовая статья'
      ),
      new Body(
        'en',
        'Test title',
        'Test article'
      )
    ]

    const testNews = new News(
      null,
      'test Author',
      new Date('2019-02-07 02:17:20.000'),
      testBody
    );

    console.log(testNews.body.find(x => x.language === 'ru').title);

    this.newsList.push(testNews);
    return this.newsList;
  }
}
