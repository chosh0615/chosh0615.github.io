import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routing';
import { AppComponent } from './app.component'
import { HeroesComponent } from './heroes.component'
import { LoopbackComponent } from './loop-back.component'
import { FlowchartComponent } from './flowchart.component'
import { PropertiesComponent } from './properties.component'
import { JobComponent } from './job.component'

@NgModule({
  imports:      [ BrowserModule, routing ],
  declarations: [ AppComponent, HeroesComponent, LoopbackComponent, FlowchartComponent, PropertiesComponent, JobComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

