import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { GalleriesRoutingModule } from './galleries-routing.module';

import { GalleriesComponent } from './galleries.component';

@NgModule({
  declarations: [
    GalleriesComponent
  ],
  imports: [
    BrowserModule,
    GalleriesRoutingModule
  ],
  providers: []
})
export class GalleriesModule { }