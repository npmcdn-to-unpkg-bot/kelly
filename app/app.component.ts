import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { DashboardComponent } from './dashboard.component';
import { MakeATipComponent } from './make-a-tip.component';
import { CurrentTipsComponent } from './current-tips.component';
import { TipsHistoryComponent } from './tips-history.component';
import { BankComponent } from './bank.component';

@Component({
    selector: 'my-app',
    template: `
		<div class="pure-menu pure-menu-horizontal">
			<a [routerLink]="['Dashboard']" class="pure-menu-heading pure-menu-link">Dashboard</a>
			<ul class="pure-menu-list">
				<li class="pure-menu-item"><a [routerLink]="['MakeATip']" class="pure-menu-link">Make a tip</a></li>
				<li class="pure-menu-item"><a [routerLink]="['CurrentTips']" class="pure-menu-link">Current tips</a></li>
				<li class="pure-menu-item"><a [routerLink]="['TipsHistory']" class="pure-menu-link">Tips History</a></li>
				<li class="pure-menu-item"><a [routerLink]="['Bank']" class="pure-menu-link">Bank</a></li>
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
    path: '/current-tips',
    name: 'CurrentTips',
    component: CurrentTipsComponent
  },
  {
    path: '/tips-history',
    name: 'TipsHistory',
    component: TipsHistoryComponent
  },
  {
    path: '/bank',
    name: 'Bank',
    component: BankComponent
  }
  
])
export class AppComponent {
  title = 'kelly';
}
