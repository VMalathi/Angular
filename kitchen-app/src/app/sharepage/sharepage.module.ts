import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from '../pages/about/about.component';
import { PagesModule } from '../pages/pages.module';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    PagesModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent
  ]
})
export class SharepageModule { }
