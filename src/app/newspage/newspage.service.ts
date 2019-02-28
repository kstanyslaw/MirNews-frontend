import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { News } from '../models/news';
// import { tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class NewspageService {

  news: News;

  constructor(private httpClient: HttpClient) { }

  getNewsById(id: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    return this.httpClient.get<News>('http://localhost:3000/news/' + id, httpOptions)
    // .pipe(
    //   tap(
    //     data => this.news = data
    //   ))
  }
}
