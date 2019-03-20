import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';

import { News } from '../models/news';

@Injectable({
  providedIn: 'root'
})
export class NewslistService {

  pages: number;

  public newsList: News[] = [];

  constructor(private httpClient: HttpClient) { }

  getPagesCount() {
    return this.pages;
  }

  getNewsList(params?: any) {
    const headers = new HttpHeaders({
        'Content-Type': 'application/json'
    });

    return this.httpClient.get<Response>('http://localhost:3000/news', {headers: headers, params: params}).pipe(
      tap(
        data => {
          this.newsList = data.docs;
          this.pages = data.pages;
        }
      )
    );
  }
}

class Response {
  constructor(
    public docs: Array<News>,
    public total: number,
    public limit: number,
    public page: number,
    public pages: number
  ) {}
}
