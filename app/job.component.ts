import { Component } from '@angular/core';

import { FlowchartComponent }	from './flowchart.component';
import { PropertiesComponent }      from './properties.component';

@Component({
  selector: 'job',
  template: `
    <flowchart (selected)="onObjectSelected($event)"></flowchart>
    <properties (propertySave)="onSave($event)" [selectedAction]="selectedAction"></properties>
  `
})
export class JobComponent {
	selectedAction : Object = {actionId: ""};

	onObjectSelected(data) {
		this.selectedAction = data;
	}

	onSave(value) {
		alert(value);
	}
}