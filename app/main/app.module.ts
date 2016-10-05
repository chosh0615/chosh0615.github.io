import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { HeroesComponent } from '../hero/heroes.component';
import { LoopbackComponent } from '../hero/loop-back.component';
import { FlowchartComponent } from '../job/flowchart.component';
import { ActionComponent } from '../job/action.component';
import { EtlActionComponent } from '../job/action/etl/etlaction.component';
import { CommandsComponent } from '../job/commands.component';
import { JobComponent } from '../job/job.component';
import { JobsComponent } from '../jobs/jobs.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

@NgModule({
  imports:      [ BrowserModule, routing ],
  declarations: [ AppComponent, 
  					HeroesComponent, 
  					LoopbackComponent, 
  					FlowchartComponent, 
  					ActionComponent, 
            EtlActionComponent,
  					CommandsComponent,
            DashboardComponent,
  					JobComponent, 
  					JobsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

