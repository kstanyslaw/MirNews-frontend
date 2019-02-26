import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-newslist-request-page',
  templateUrl: './newslist-request-page.component.html',
  styleUrls: ['./newslist-request-page.component.css']
})
export class NewslistRequestPageComponent implements OnInit {

  currentPage: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        console.log(params); // {order: "popular"}

        this.currentPage = params.page;
      });
  }

}
