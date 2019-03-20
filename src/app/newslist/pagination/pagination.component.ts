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

  pagesArray: any[];

  currentPage: number;

  constructor(private newslist: NewslistService, private route: ActivatedRoute) { }

  getPagesArray() {
    this.pagesArray = [];
    if (this.pages) {
      if (this.pages <= 7) {
        for (let i = 0; i < this.pages; i++) {
          this.pagesArray[i] = i + 1;
        }
      } else {
        if((this.currentPage - 1) < 3) {
          this.pagesArray[0] = 1;
          this.pagesArray[1] = 2;
          this.pagesArray[2] = 3;
          this.pagesArray.push('...');
          this.pagesArray.push(this.pages);
        } else if((this.pages - this.currentPage) < 3) {
          this.pagesArray[0] = 1;
          this.pagesArray[1] = '...';
          this.pagesArray[2] = this.pages - 3;
          this.pagesArray[3] = this.pages - 2;
          this.pagesArray[4] = this.pages - 1;
          this.pagesArray[5] = this.pages;
        } else {
          this.pagesArray[0] = 1;
          this.pagesArray[1] = '...';
          this.pagesArray[2] = this.currentPage - 1;
          this.pagesArray[3] = this.currentPage;
          this.pagesArray[4] = this.currentPage + 1;
          this.pagesArray[5] = '...';
          this.pagesArray[6] = this.pages;
        }
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
