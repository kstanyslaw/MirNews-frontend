import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { DashboardComponent } from './dashboard.component';
import { AddNewsComponent } from './add-news/add-news.component';

import { DashboardService } from './dashboard.service';

@NgModule({
  declarations: [
    DashboardComponent,
    AddNewsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
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
