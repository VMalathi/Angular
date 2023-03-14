import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SinglemenuComponent } from './singlemenu/singlemenu.component';



@NgModule({
  declarations: [
    HomeComponent,
    MenuComponent,
    AboutComponent,
    ContactComponent,
    SinglemenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HomeComponent,
    MenuComponent,
    AboutComponent,
    ContactComponent
  ]
})
export class PagesModule { }
