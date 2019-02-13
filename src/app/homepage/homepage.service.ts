import { Injectable } from '@angular/core';

import { News } from "../models/news";
import { Body } from '../models/single-language-news-body';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HomepageService {

  public newsList: News[] = [];

  constructor(private httpClient: HttpClient) { }

  getNewsList() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.httpClient.get<News[]>('http://localhost:3000/news', httpOptions);
  }
}
