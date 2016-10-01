"use strict";
var router_1 = require('@angular/router');
var heroes_component_1 = require('./heroes.component');
var job_component_1 = require('./job.component');
var appRoutes = [
    {
        path: '',
        redirectTo: '/job',
        pathMatch: 'full'
    },
    {
        path: 'heroes',
        component: heroes_component_1.HeroesComponent
    },
    {
        path: 'job',
        component: job_component_1.JobComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map