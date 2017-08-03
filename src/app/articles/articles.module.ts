import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ArticlesRoutingModule } from './articles-routing.module';

import { ArticlesComponent } from './articles.component';

@NgModule({
  declarations: [
    ArticlesComponent
  ],
  imports: [
    BrowserModule,
    ArticlesRoutingModule
  ],
  providers: []
})
export class ArticlesModule { }