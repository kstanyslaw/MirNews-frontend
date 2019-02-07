import { Injectable } from '@angular/core';

import { News } from "../models/news";

@Injectable()
export class HomepageService {

  newsList: News[] = [];

  constructor() { }

  getNewsList() {
    const testNews = new News(
      null,
      'test Title',
      'test Author',
      new Date('2019-02-07 02:17:20.000'),
      'test Article'
    );
    this.newsList.push(testNews);
    return this.newsList;
  }
}
