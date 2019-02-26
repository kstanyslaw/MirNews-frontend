import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import ngx-translate and the http loader
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { HomepageModule } from './homepage/homepage.module';
import { NewspageModule } from './newspage/newspage.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { NavbarModule } from './navbar/navbar.module';
import { NewslistRequestPageModule } from './newslist-request-page/newslist-request-page.module';
// import { RightsidebarComponent } from './rightsidebar/rightsidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
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
    HomepageModule,
    NewspageModule,
    DashboardModule,
    NavbarModule,
    NewslistRequestPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

// required for AOT compilation (translation code)
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
