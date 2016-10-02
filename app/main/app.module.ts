import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { HeroesComponent } from '../hero/heroes.component';
import { LoopbackComponent } from '../hero/loop-back.component';
import { FlowchartComponent } from '../job/flowchart.component';
import { PropertiesComponent } from '../job/properties.component';
import { JobComponent } from '../job/job.component';
import { JobsComponent } from '../jobs/jobs.component';

@NgModule({
  imports:      [ BrowserModule, routing ],
  declarations: [ AppComponent, 
  					HeroesComponent, 
  					LoopbackComponent, 
  					FlowchartComponent, 
  					PropertiesComponent, 
  					JobComponent, 
  					JobsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

