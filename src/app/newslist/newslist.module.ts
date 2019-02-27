import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewslistComponent } from './newslist.component';
import { NewslistService } from './newslist.service';
import { PaginationComponent } from './pagination/pagination.component';
import { AppRoutingModule } from '../app-routing.module';
import { RightsidebarComponent } from '../rightsidebar/rightsidebar.component';

@NgModule({
  declarations: [
    NewslistComponent,
    PaginationComponent,
    RightsidebarComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  providers: [NewslistService],
  exports: [
    NewslistComponent
  ]
})
export class NewslistModule { }
