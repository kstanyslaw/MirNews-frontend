import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RightsidebarComponent } from './rightsidebar.component';
import { ArchiveComponent } from './archive/archive.component';

// import ngx-translate and the http loader
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    RightsidebarComponent,
    ArchiveComponent
  ],
  imports: [
    CommonModule,

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
  exports: [
    RightsidebarComponent
  ]
})
export class RightsidebarModule { }

// required for AOT compilation (translation code)
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}