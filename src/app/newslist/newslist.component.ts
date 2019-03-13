import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewslistService } from './newslist.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-newslist',
  templateUrl: './newslist.component.html',
  styleUrls: ['./newslist.component.css']
})
export class NewslistComponent implements OnInit {

  currentPage: number;

  constructor(private route: ActivatedRoute, private newslistService: NewslistService, private translate: TranslateService) { }

  ngOnInit() {

    this.newslistService.getNewsList().subscribe(
      data => {
        this.newslistService.newsList = data;
      }
    );

    this.route.queryParams
      .subscribe(params => {
        this.currentPage = params.page;
      });
  }

}
