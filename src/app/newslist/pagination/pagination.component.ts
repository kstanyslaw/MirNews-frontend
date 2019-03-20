import { Component, OnInit, Input } from '@angular/core';
import { NewslistService } from '../newslist.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() pages: number;

  pagesArray: number[];

  currentPage: number;

  constructor(private newslist: NewslistService, private route: ActivatedRoute) { }

  getPagesArray() {
    this.pagesArray = [];
    if (this.pages) {
      for (let i = 0; i < this.pages; i++) {
        this.pagesArray[i] = i + 1;
      }
    }
    return this.pagesArray;
  }

  getPreviousPage() {
    return (this.currentPage - 1);
  }

  getNextPage() {
    return (this.currentPage + 1);
  }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.currentPage = +params.page;
      });
  }

}
