import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';

import { HomepageModule } from './homepage/homepage.module';
import { NewspageModule } from './newspage/newspage.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomepageModule,
    NewspageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
