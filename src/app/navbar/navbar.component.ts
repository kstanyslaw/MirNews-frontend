import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { NavbarService } from './navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private navbarService: NavbarService, private translate: TranslateService) { }

  getStyle(category: any) {
    if (!category.navColor) {
      return '#6c757d';
    }
    return category.navColor;
  }

  translateCategory(category) {
    const lang = this.translate.currentLang;
    return category[lang];
  }

  ngOnInit() {
    this.navbarService.getCategories().subscribe();
  }

}
