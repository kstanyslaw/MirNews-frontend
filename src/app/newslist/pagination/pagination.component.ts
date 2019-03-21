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

  @Input() currentPage: number;

  pagesArray: any[];

  constructor(private newslist: NewslistService, private route: ActivatedRoute) { }

  getPagesArray() {
    this.pagesArray = [];
    if (this.pages) {
      if (this.pages <= 7) {
        for (let i = 0; i < this.pages; i++) {
          this.pagesArray[i] = new Page(i + 1, {page: i + 1}, {});
        }
      } else {
        if(this.currentPage === 1) {
          this.pagesArray[0] = this.getPage(1, 'current');
          this.pagesArray[1] = this.getPage(2);
          this.pagesArray[2] = this.getPage(3);
        } else if (this.currentPage === this.pages) {
          this.pagesArray[0] = this.getPage(this.pages - 2);
          this.pagesArray[1] = this.getPage(this.pages - 1);
          this.pagesArray[2] = this.getPage(this.pages, 'current');
        } else {
          this.pagesArray[0] = this.getPage(this.currentPage - 1);
          this.pagesArray[1] = this.getPage(this.currentPage, 'current');
          this.pagesArray[2] = this.getPage(this.currentPage + 1);
        }
    
        // Offsets
          // Before
        if(this.currentPage === 2 || this.currentPage === 1) {
    
        } else if(this.currentPage === 3) {
          this.pagesArray.unshift(this.getPage(1));
        } else {
          this.pagesArray.unshift(this.getPage('...', 'before'));
          this.pagesArray.unshift(this.getPage(1));
        }
    
          // After
        if(this.currentPage === this.pages - 1 || this.currentPage === this.pages) {
    
        } else if(this.currentPage === this.pages - 2) {
          this.pagesArray.push(this.getPage(this.pages));
        } else {
          this.pagesArray.push(this.getPage('...', 'after'));
          this.pagesArray.push(this.getPage(this.pages));
        }
      }
    }   

    return this.pagesArray;
  }

  getPage(number: any, parameter?: string) {
    var page = new Page(
      number,
      { page: number }
    )

    switch (parameter) {
      case 'before':
        page.query = {page: this.currentPage - 2};
        break;
      
      case 'after':
        page.query = {page: this.currentPage + 2};
        break;

      case 'current':
        page.style = { 'pointer-events': 'none', 'cursor': 'default', 'color': 'white', 'background-color': '#007bff'}

      default:
        break;
    }

    return page;
  }

  getPreviousPage() {
    return (this.currentPage - 1);
  }

  getNextPage() {
    return (this.currentPage + 1);
  }

  ngOnInit() {
  }

}

class Page {
  constructor(
    public number: any,
    public query: Object,
    public style?: object
  ) {}
}