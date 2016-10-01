import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent } from './heroes.component';
import { JobComponent }	from './job.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/job',
    pathMatch: 'full'
  },
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'job',
    component: JobComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);