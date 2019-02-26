import { Component, OnInit } from '@angular/core';
import { NavbarService } from './navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private navbarService: NavbarService) { }

  getStyle(category: any) {
    if (!category.color) {
      return '#6c757d';
    }
    return category.color;
  }

  ngOnInit() {
  }

}
