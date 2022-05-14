import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { PageaComponent } from './components/pages/pagea/pagea.component';
import { PagebComponent } from './components/pages/pageb/pageb.component';
import { PagecComponent } from './components/pages/pagec/pagec.component';
import { Page1Component } from './components/pages/page1/page1.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageaComponent,
    PagebComponent,
    PagecComponent,
    Page1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
