import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { AddNewsComponent } from './add-news/add-news.component';

import { DashboardService } from './dashboard.service';

@NgModule({
  declarations: [
    DashboardComponent,
    AddNewsComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    DashboardService
  ],
  exports: [
    DashboardComponent,
    AddNewsComponent
  ]
})
export class DashboardModule { }
