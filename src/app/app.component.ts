import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <a [routerLink]="['/articles']">Articles</a>
    <a [routerLink]="['/galleries']">Galleries</a>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  
}
