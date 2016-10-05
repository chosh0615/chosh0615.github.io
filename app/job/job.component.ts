import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';

import { FlowchartComponent }		from './flowchart.component';
import { ActionComponent }	      from './action.component';
import { PropertyService }			from '../service/property.service';

@Component({
  selector: 'job',
  template: `
  	<div>
  		<commands [selectedAction]="selectedAction"
  				(addClicked)="onAddClicked()"
  				(removeClicked)="onRemoveClicked()"></commands>
  	</div>
  	<div>
	    <flowchart (selected)="onObjectSelected($event)"
	    			(unselected)="onObjectUnselected($event)"></flowchart>
	    <action (actionSave)="onSave($event)" 
	    			[selectedAction]="selectedAction"></action>
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