"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var app_routing_1 = require('./app.routing');
var app_component_1 = require('./app.component');
var heroes_component_1 = require('../hero/heroes.component');
var loop_back_component_1 = require('../hero/loop-back.component');
var flowchart_component_1 = require('../job/flowchart.component');
var action_component_1 = require('../job/action.component');
var etlaction_component_1 = require('../job/action/etl/etlaction.component');
var configurations_component_1 = require('../job/action/etl/configurations.component');
var property_component_1 = require('../job/action/etl/property.component');
var construct_component_1 = require('../job/action/etl/construct.component');
var commands_component_1 = require('../job/commands.component');
var job_component_1 = require('../job/job.component');
var jobs_component_1 = require('../jobs/jobs.component');
var dashboard_component_1 = require('../dashboard/dashboard.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, app_routing_1.routing],
            declarations: [app_component_1.AppComponent,
                heroes_component_1.HeroesComponent,
                loop_back_component_1.LoopbackComponent,
                flowchart_component_1.FlowchartComponent,
                action_component_1.ActionComponent,
                etlaction_component_1.EtlActionComponent,
                configurations_component_1.ConfigurationsComponent,
                property_component_1.PropertyComponent,
                construct_component_1.ConstructComponent,
                commands_component_1.CommandsComponent,
                dashboard_component_1.DashboardComponent,
                job_component_1.JobComponent,
                jobs_component_1.JobsComponent],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map