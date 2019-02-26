import { Component, OnInit } from '@angular/core';
import { NewslistRequestPageService } from '../newslist-request-page.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  pages: number[];

  currentPage: number;

  constructor(private newslistRequestPage: NewslistRequestPageService, private route: ActivatedRoute) { }

  getPreviousPage() {
    console.log (this.currentPage - 1);
    return (this.currentPage - 1);
  }

  ngOnInit() {
    this.pages = this.newslistRequestPage.getPagesCount();
    this.route.queryParams
      .subscribe(params => {
        console.log(params); // {order: "popular"}

        this.currentPage = params.page;
      });
  }

}
