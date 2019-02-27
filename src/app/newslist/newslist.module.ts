import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';

// import ngx-translate and the http loader
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import { NewslistComponent } from './newslist.component';
import { PaginationComponent } from './pagination/pagination.component';

import { RightsidebarComponent } from '../rightsidebar/rightsidebar.component';

import { NewslistService } from './newslist.service';

@NgModule({
  declarations: [
    NewslistComponent,
    PaginationComponent,
    RightsidebarComponent
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
  providers: [NewslistService],
  exports: [
    NewslistComponent
  ]
})
export class NewslistModule { }

// required for AOT compilation (translation code)
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}