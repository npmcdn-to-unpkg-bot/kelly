import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { DashboardComponent } from './dashboard.component';
import { MakeATipComponent } from './make-a-tip.component';
import { CurrentTipComponent } from './current-tip.component';

@Component({
    selector: 'my-app',
    template: `
	  <h1>{{title}}</h1>
	  <a [routerLink]="['Tip']">Heroes</a>
	  <router-outlet></router-outlet>
	`,
	directives: [ROUTER_DIRECTIVES],
	provider: [ROUTER_PROVIDERS]
})
@RouteConfig([
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  },
  {
    path: '/make-a-tip',
    name: 'make-a-tip',
    component: MakeATipComponent
  },
  {
    path: '/current-tip',
    name: 'current-tip',
    component: CurrentTipComponent
  }
])
export class AppComponent {
  title = 'kelly';
}

export class AppComponent { }
