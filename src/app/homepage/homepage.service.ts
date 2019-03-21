import { Injectable } from '@angular/core';

import { News } from "../models/news";
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

  getImportantNews() {
    return [
      new News('5c8b7466b4cd582324342d2b', 'Natalia Sizova', '10.03.2019, 14:00', {en: 'Russians protest against government’s censorship', ru: 'Россияне против ограничений интернета'}, null, {en: 'Thousands of people got together to one of the biggest protests in the Russian in Moscow last weekends against Bill’s Internet controls.', ru: 'Собравшиеся скандировали лозунги: «Руки прочь от интернета» и «Великая Россия - свободный интернет».', img: "https://img.znak.com/285958.jpg"}),
      new News('5c8fd57bea7d6f6c1e9ee186', 'Fakedocs Maker', '10.03.2019, 14:00', {en: 'Random Title', ru: 'Случайный заголовок'}, null, {en: 'Fringilla elementum laoreet cras posuere interdum euismod placerat at tristique sapien posuere consectetur', ru: 'Лик защитник зва вел Пастушьи лес спасенье пел чая Зрю псалтиры дар. Ее гл предвещают на Аз предвожуся ей во се бесплотных Воздаятель ту.', img: "https://loremflickr.com/1280/720/Society?lock=92"}),
      new News('5c8fd57cea7d6f6c1e9ee3de', 'Fakedocs Maker', '10.03.2019, 14:00', {en: 'Random Title', ru: 'Случайный заголовок'}, null, {en: 'Fringilla elementum laoreet cras posuere interdum euismod placerat at tristique sapien posuere consectetur', ru: 'Лик защитник зва вел Пастушьи лес спасенье пел чая Зрю псалтиры дар. Ее гл предвещают на Аз предвожуся ей во се бесплотных Воздаятель ту.', img: "https://loremflickr.com/1280/720/Busines?lock=92"}),
    ]
  }
}
