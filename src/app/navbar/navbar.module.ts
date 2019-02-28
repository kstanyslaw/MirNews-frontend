import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import ngx-translate and the http loader
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { NavbarComponent } from './navbar.component';

import { NavbarService } from './navbar.service';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    NavbarComponent
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
  providers: [
    NavbarService
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }

// required for AOT compilation (translation code)
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
