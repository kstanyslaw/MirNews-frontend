import { Component, OnInit } from '@angular/core';
import { NewslistService } from '../newslist.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  pages: number[];

  currentPage: number;

  constructor(private newslist: NewslistService, private route: ActivatedRoute) { }

  getPreviousPage() {
    return (this.currentPage - 1);
  }

  getNextPage() {
    return (this.currentPage + 1);
  }

  ngOnInit() {
    this.pages = this.newslist.getPagesCount();
    this.route.queryParams
      .subscribe(params => {
        // console.log(params); // {order: "popular"}

        this.currentPage = +params.page;
      });
  }

}
