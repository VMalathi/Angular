import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedPagesModule } from './shared-pages/shared-pages.module';
import { HttpClientModule } from '@angular/common/http';
import { NewsapiserviceService } from './services/newsapiservice.service';
import { NewsCompComponent } from './news-comp/news-comp.component';
import { TechNewsComponent } from './tech-news/tech-news.component';
import { BusinessNewsComponent } from './business-news/business-news.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsCompComponent,
    TechNewsComponent,
    BusinessNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedPagesModule
  ],
  providers: [
    NewsapiserviceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
