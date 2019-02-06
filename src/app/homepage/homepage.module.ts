import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { HomepageService } from "./homepage.service";

@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    CommonModule
  ],
  providers:[
    HomepageService
  ],
  exports: [
    HomepageComponent
  ]
})
export class HomepageModule { }
