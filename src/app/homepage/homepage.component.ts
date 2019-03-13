import { Component, OnInit } from '@angular/core';

import { HomepageService } from './homepage.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private homepageService: HomepageService, private translate: TranslateService) { }

  ngOnInit() { }

}

