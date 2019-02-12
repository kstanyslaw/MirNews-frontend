import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewspageService } from './newspage.service';

import { NewspageComponent } from './newspage.component';
import { TitleComponent } from './title/title.component';
import { ArticleComponent } from './article/article.component';
import { AuthorComponent } from './author/author.component';
import { RelatedNewsComponent } from './related-news/related-news.component';
import { DateComponent } from './date/date.component';

@NgModule({
  declarations: [
    NewspageComponent,
    TitleComponent,
    AuthorComponent,
    ArticleComponent,
    RelatedNewsComponent,
    DateComponent,
  ],
  imports: [
    CommonModule
  ],
  providers: [
    NewspageService
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
