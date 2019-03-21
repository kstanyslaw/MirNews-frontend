import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { HomepageService } from '../homepage.service';

import { News } from 'src/app/models/news';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {

  slides: Slide[] = [];

  activeSlide: number = 0;

  constructor(private translate: TranslateService, private homepageService: HomepageService) { }

  getBackgroundImg() {
    var imageUrl = 'url(' + this.slides[this.activeSlide].news.preview.img + ')';
    return { 'background-image': imageUrl }
  }

  changeActiveSlide(i: number) {
    this.slides[this.activeSlide].isActive = false;
    this.slides[i].isActive = true;
    this.activeSlide = i;
  }

  prevSlide(){
    if (this.activeSlide === 0) {
      this.slides[this.activeSlide].isActive = false;
      this.slides[this.slides.length - 1].isActive = true;
      this.activeSlide = this.slides.length - 1;
    } else {
      this.slides[this.activeSlide].isActive = false;
      this.slides[this.activeSlide - 1].isActive = true;
      this.activeSlide = this.activeSlide - 1;
    }
  }

  nextSlide() {
    if (this.activeSlide === this.slides.length - 1) {
      this.slides[this.activeSlide].isActive = false;
      this.slides[0].isActive = true;
      this.activeSlide = 0;
    } else {
      this.slides[this.activeSlide].isActive = false;
      this.slides[this.activeSlide + 1].isActive = true;
      this.activeSlide = this.activeSlide + 1;
    }
  }

  ngOnInit() {
    var news = this.homepageService.getImportantNews();
    news.forEach(element => {
      this.slides.push(new Slide(element, false));
    });
    this.slides[this.activeSlide].isActive = true;
    console.log(news);
  }
}

class Slide {
  constructor(
    public news: News,
    public isActive: boolean
  ) {}
}
