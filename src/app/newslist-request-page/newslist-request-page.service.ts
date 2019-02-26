import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewslistRequestPageService {

  pages: number[] = [1,2,3,4,5,6,7];

  constructor() { }

  getPagesCount() {
    return this.pages;
  }
}
