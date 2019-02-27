import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { News } from '../models/news';

@Injectable({
  providedIn: 'root'
})
export class NewslistRequestPageService {

  pages: number[] = [1,2,3,4,5,6,7];

  constructor(private httpClient: HttpClient) { }

  getPagesCount() {
    return this.pages;
  }

  getNewsList() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.httpClient.get<News[]>('http://localhost:3000/news', httpOptions);
  }
}
