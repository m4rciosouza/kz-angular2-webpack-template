import { Component } from '@angular/core';

@Component({
  selector: 'kz-app',
  template: `
	<nav class="navbar navbar-inverse">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="#">Angular 2 Template (por Kazale.com)</a>
      </div>
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li><a routerLink="/">Inicial</a></li>
          <li><a routerLink="/demo">Demo</a></li>
        </ul>
      </div>
    </div>
   </nav>  
  <router-outlet></router-outlet>
  `,
})
export class AppComponent {
}
