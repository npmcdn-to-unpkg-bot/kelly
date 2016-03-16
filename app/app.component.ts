import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { DashboardComponent } from './dashboard.component';
import { MakeATipComponent } from './make-a-tip.component';
import { CurrentTipComponent } from './current-tip.component';

@Component({
    selector: 'my-app',
    template: `
		<div class="pure-menu pure-menu-horizontal">
			<a [routerLink]="['Dashboard']" class="pure-menu-heading pure-menu-link">Dashboard</a>
			<ul class="pure-menu-list">
				<li class="pure-menu-item"><a [routerLink]="['MakeATip']" class="pure-menu-link">Make a tip</a></li>
				<li class="pure-menu-item"><a [routerLink]="['CurrentTip']" class="pure-menu-link">Current tip</a></li>
			</ul>
		</div>
		<router-outlet></router-outlet>
	`,
    directives: [ROUTER_DIRECTIVES],
	providers: [ROUTER_PROVIDERS]
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
    name: 'MakeATip',
    component: MakeATipComponent
  },
  {
    path: '/current-tip',
    name: 'CurrentTip',
    component: CurrentTipComponent
  }
])
export class AppComponent {
  title = 'kelly';
}
