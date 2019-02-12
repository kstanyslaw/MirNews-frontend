import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import ngx-translate and the http loader
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import { HomepageComponent } from './homepage.component';
import { HomepageService } from "./homepage.service";
import { NewslistComponent } from './newslist/newslist.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    HomepageComponent,
    NewslistComponent
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
    NewslistComponent
  ]
})
export class HomepageModule { }

// required for AOT compilation (translation code)
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
