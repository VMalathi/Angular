import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessNewsComponent } from './business-news/business-news.component';
import { NewsCompComponent } from './news-comp/news-comp.component';
import { TechNewsComponent } from './tech-news/tech-news.component';

const routes: Routes = [
  { path:'', component:NewsCompComponent },
  { path:'tech', component:TechNewsComponent },
  { path:'business', component:BusinessNewsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
