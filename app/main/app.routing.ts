import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent } from '../hero/heroes.component';
import { JobComponent }	from '../job/job.component';
import { JobsComponent } from '../jobs/jobs.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/jobs',
    pathMatch: 'full'
  },
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'job',
    component: JobComponent
  },
  {
    path: 'jobs',
    component: JobsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);