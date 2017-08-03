import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GalleriesComponent } from './galleries.component';

const articlesRoutes: Routes = [
    {
        path: 'galleries',
        component: GalleriesComponent
    }
];

@NgModule({
  imports: [
    RouterModule.forChild(articlesRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class GalleriesRoutingModule { }