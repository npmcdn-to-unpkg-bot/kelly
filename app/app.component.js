System.register(['angular2/core', 'angular2/router', './dashboard.component', './make-a-tip.component', './current-tips.component', './tips-history.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, dashboard_component_1, make_a_tip_component_1, current_tips_component_1, tips_history_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (make_a_tip_component_1_1) {
                make_a_tip_component_1 = make_a_tip_component_1_1;
            },
            function (current_tips_component_1_1) {
                current_tips_component_1 = current_tips_component_1_1;
            },
            function (tips_history_component_1_1) {
                tips_history_component_1 = tips_history_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'kelly';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n\t\t<div class=\"pure-menu pure-menu-horizontal\">\n\t\t\t<a [routerLink]=\"['Dashboard']\" class=\"pure-menu-heading pure-menu-link\">Dashboard</a>\n\t\t\t<ul class=\"pure-menu-list\">\n\t\t\t\t<li class=\"pure-menu-item\"><a [routerLink]=\"['MakeATip']\" class=\"pure-menu-link\">Make a tip</a></li>\n\t\t\t\t<li class=\"pure-menu-item\"><a [routerLink]=\"['CurrentTips']\" class=\"pure-menu-link\">Current tips</a></li>\n\t\t\t\t<li class=\"pure-menu-item\"><a [routerLink]=\"['TipsHistory']\" class=\"pure-menu-link\">Tips History</a></li>\n\t\t\t</ul>\n\t\t</div>\n\t\t<router-outlet></router-outlet>\n\t",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [router_1.ROUTER_PROVIDERS]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/dashboard',
                            name: 'Dashboard',
                            component: dashboard_component_1.DashboardComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/make-a-tip',
                            name: 'MakeATip',
                            component: make_a_tip_component_1.MakeATipComponent
                        },
                        {
                            path: '/current-tips',
                            name: 'CurrentTips',
                            component: current_tips_component_1.CurrentTipsComponent
                        },
                        {
                            path: '/tips-history',
                            name: 'TipsHistory',
                            component: tips_history_component_1.TipsHistoryComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map