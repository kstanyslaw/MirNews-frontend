import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RightsidebarModule } from '../rightsidebar/rightsidebar.module';

import { NewspageComponent } from './newspage.component';
import { TitleComponent } from './title/title.component';
import { ArticleComponent } from './article/article.component';
import { AuthorComponent } from './author/author.component';
import { RelatedNewsComponent } from './related-news/related-news.component';
import { DateComponent } from './date/date.component';
import { BreadcrumpComponent } from './breadcrump/breadcrump.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    NewspageComponent,
    TitleComponent,
    AuthorComponent,
    ArticleComponent,
    RelatedNewsComponent,
    DateComponent,
    BreadcrumpComponent,
  ],
  imports: [
    CommonModule,
    RightsidebarModule,
    AppRoutingModule
  ],
  exports: [
    NewspageComponent,
    TitleComponent,
    AuthorComponent,
    ArticleComponent,
    RelatedNewsComponent
  ]
})
export class NewspageModule { }
