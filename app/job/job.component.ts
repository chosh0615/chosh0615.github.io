import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';

import { FlowchartComponent }		from './flowchart.component';
import { PropertiesComponent }      from './properties.component';
import { PropertyService }			from '../service/property.service';

@Component({
  selector: 'job',
  template: `
  	<div>
  		<actions [selectedAction]="selectedAction"
  				(addClicked)="onAddClicked()"
  				(removeClicked)="onRemoveClicked()"></actions>
  	</div>
  	<div>
	    <flowchart (selected)="onObjectSelected($event)"
	    			(unselected)="onObjectUnselected($event)"></flowchart>
	    <properties (propertySave)="onSave($event)" 
	    			[selectedAction]="selectedAction"></properties>
    </div>
  `,
  providers: [PropertyService]
})
export class JobComponent {
	selectedAction : Object = {};

	@ViewChild(FlowchartComponent) flowchartComponent : FlowchartComponent;

	onObjectSelected(data) {
		this.selectedAction = data;
	}

	onObjectUnselected(data) {
		this.selectedAction = {};
	}

	onAddClicked() {
		this.flowchartComponent.addAction();
	}

	onRemoveClicked() {
		this.flowchartComponent.removeAction();
	}

	onSave(value) {
		alert(value);
	}
}