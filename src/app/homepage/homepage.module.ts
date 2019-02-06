import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { HomepageService } from "./homepage.service";
import { NewslistComponent } from './newslist/newslist.component';

@NgModule({
  declarations: [
    HomepageComponent,
    NewslistComponent
  ],
  imports: [
    CommonModule
  ],
  providers:[
    HomepageService
  ],
  exports: [
    HomepageComponent,
    NewslistComponent
  ]
})
export class HomepageModule { }
