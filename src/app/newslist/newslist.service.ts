import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { News } from '../models/news';

@Injectable({
  providedIn: 'root'
})
export class NewslistService {

  public newsList: News[] = [];

  constructor(private httpClient: HttpClient) { }

  getNewsList(params?: any) {
    const headers = new HttpHeaders({
        'Content-Type': 'application/json'
    });

    return this.httpClient.get<Response>('http://localhost:3000/news', {headers: headers, params: params}).pipe(
      tap(
        data => {
          this.newsList = data.docs;
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
