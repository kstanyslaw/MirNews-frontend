import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewslistRequestPageComponent } from './newslist-request-page.component';
import { NewslistRequestPageService } from './newslist-request-page.service';

@NgModule({
  declarations: [NewslistRequestPageComponent],
  imports: [
    CommonModule
  ],
  providers: [NewslistRequestPageService]
})
export class NewslistRequestPageModule { }
