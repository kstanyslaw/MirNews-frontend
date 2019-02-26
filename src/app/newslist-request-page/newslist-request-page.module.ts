import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewslistRequestPageComponent } from './newslist-request-page.component';
import { NewslistRequestPageService } from './newslist-request-page.service';
import { HomepageModule } from '../homepage/homepage.module';
import { PaginationComponent } from './pagination/pagination.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    NewslistRequestPageComponent,
    PaginationComponent,
  ],
  imports: [
    CommonModule,
    HomepageModule,
    AppRoutingModule
  ],
  providers: [NewslistRequestPageService]
})
export class NewslistRequestPageModule { }
