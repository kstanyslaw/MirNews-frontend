import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewspageService {

  constructor(private httpClient: HttpClient) { }

  getNewsById(id: string) {
    console.log(id);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    return this.httpClient.get('http://localhost:3000/news/' + id, httpOptions);
  }
}
