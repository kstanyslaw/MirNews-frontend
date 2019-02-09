import { Injectable } from '@angular/core';
import { News } from '../models/news';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private httpClient: HttpClient) { }

  addNews(news: News) {
    console.log(news);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.httpClient.post('http://localhost:3000/news', news, httpOptions);
  }
}
