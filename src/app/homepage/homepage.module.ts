import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import ngx-translate and the http loader
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from '../app-routing.module';

import { HomepageService } from "./homepage.service";

import { HomepageComponent } from './homepage.component';
import { NewslistComponent } from './newslist/newslist.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { PopularComponent } from './popular/popular.component';
import { RightsidebarComponent } from '../rightsidebar/rightsidebar.component';


@NgModule({
  declarations: [
    HomepageComponent,
    NewslistComponent,
    JumbotronComponent,
    RightsidebarComponent,
    PopularComponent,
  ],
  imports: [
    CommonModule,
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
  ],
  providers:[
    HomepageService
  ],
  exports: [
    HomepageComponent,
    NewslistComponent,
    JumbotronComponent,
    RightsidebarComponent
  ]
})
export class HomepageModule { }

// required for AOT compilation (translation code)
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
