import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { NewspageComponent } from './newspage/newspage.component';
import { NewslistComponent } from './newslist/newslist.component';
import { AboutUsComponent } from './footer/about-us/about-us.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'news', component: NewslistComponent },
  { path: 'about_us', component: AboutUsComponent },
  { path: ':id', component: NewspageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }