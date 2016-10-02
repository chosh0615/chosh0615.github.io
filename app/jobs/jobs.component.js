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
var router_1 = require('@angular/router');
var job_service_1 = require('../service/job.service');
var JobsComponent = (function () {
    function JobsComponent(jobService, router) {
        this.jobService = jobService;
        this.router = router;
        this.jobs = this.jobService.getJobs();
    }
    JobsComponent.prototype.onSelect = function ($event) {
        var link = ['/job'];
        this.router.navigate(link);
    };
    JobsComponent = __decorate([
        core_1.Component({
            selector: 'jobs',
            template: "\n    <h1>Job list</h1>\n    <table class=\"table table-hover\">\n      <tr><th>Job ID</th><th>Job name</th></tr>\n      <tr *ngFor=\"let job of jobs\" (click)=\"onSelect($event)\">\n        <td>{{ job.jobId }}</td>\n        <td>{{ job.name }}</td>\n      </tr>\n    </table>\n  ",
            providers: [job_service_1.JobService]
        }), 
        __metadata('design:paramtypes', [job_service_1.JobService, router_1.Router])
    ], JobsComponent);
    return JobsComponent;
}());
exports.JobsComponent = JobsComponent;
//# sourceMappingURL=jobs.component.js.map