import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';

// import ngx-translate and the http loader
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { HeaderComponent } from './header.component';
import { SearchComponent } from './search/search.component';
import { ChangeLanguageComponent } from './change-language/change-language.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SearchComponent,
    ChangeLanguageComponent
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
  providers: [],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }

// required for AOT compilation (translation code)
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
