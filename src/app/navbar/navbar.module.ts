import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { NavbarService } from './navbar.service';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    NavbarService
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
