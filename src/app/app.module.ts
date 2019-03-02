import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import ngx-translate and the http loader
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from './footer/footer.component';

import { HeaderModule } from './header/header.module';
import { HomepageModule } from './homepage/homepage.module';
import { NewspageModule } from './newspage/newspage.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { NavbarModule } from './navbar/navbar.module';
import { NewslistModule } from './newslist/newslist.module';
import { AboutUsComponent } from './footer/about-us/about-us.component';
import { ContactsComponent } from './footer/contacts/contacts.component';
// import { RightsidebarComponent } from './rightsidebar/rightsidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    AboutUsComponent,
    ContactsComponent,
    // RightsidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // configure the imports
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    }),

    // apps modules
    HeaderModule,
    HomepageModule,
    NewspageModule,
    DashboardModule,
    NavbarModule,
    NewslistModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

// required for AOT compilation (translation code)
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
