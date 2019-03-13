import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NewspageService } from './newspage.service';
import { TranslateService } from '@ngx-translate/core';

import { News } from '../models/news';

@Component({
  selector: 'app-newspage',
  templateUrl: './newspage.component.html',
  styleUrls: ['./newspage.component.css']
})
export class NewspageComponent implements OnInit {

  news: News;

  constructor(
    private route: ActivatedRoute,
    private newspageService: NewspageService,
    private translate: TranslateService
    ) { }

  ngOnInit() {
    const grantId = this.route.snapshot.paramMap.get('id');
    this.newspageService.getNewsById(grantId).subscribe(
      data => {
        this.news = data;
        this.news.date = new Date(this.news.date);   
      }
    );
  }

}