import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
  	<h1>{{title}}</h1>
	<nav>
		<!--<a routerLink="/heroes">Heroes</a>-->
		Temporary links: 
		<a routerLink="/dashboard">Dashboard</a>
		<a routerLink="/jobs">Jobs</a>
		<a routerLink="/job">Job</a>
	</nav>
	<router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'DPD';
}