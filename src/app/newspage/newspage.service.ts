import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';

import { News } from '../models/news';

@Injectable({
  providedIn: 'root'
})
export class NewspageService {

  news: News;

  constructor(private httpClient: HttpClient, private router: Router) { }

  getNewsById(id: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    return this.httpClient.get<News>('http://localhost:3000/news/' + id, httpOptions)
    .pipe(
      catchError(error => {
        if (error.status === 404) {
          this.router.navigate(['./about_us'])
        }
      })
      )
  }
}
