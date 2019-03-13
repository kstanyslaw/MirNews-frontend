import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NewslistService } from '../newslist.service';
import { News } from 'src/app/models/news';

@Component({
  selector: 'app-newscard',
  templateUrl: './newscard.component.html',
  styleUrls: ['./newscard.component.css']
})
export class NewscardComponent implements OnInit {

  @Input() news: News;

  constructor(private newslistService: NewslistService, private translate: TranslateService) { }

  getDate(date: string) {
    return new Date(date);
  }

  ngOnInit() {
    console.log(this.news.preview[this.translate.currentLang]);
  }

}
