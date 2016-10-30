import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';

import { FlowchartComponent }		from './flowchart.component';
import { ActionComponent }	      from './action.component';
import { PropertyService }			from '../service/property.service';

import { ActionContainer }		from '../model/actioncontainer'
import { EtlAction }		from '../model/etlaction'

@Component({
  selector: 'job',
  template: `
  	<div>
  		<commands [selectedActionContainer]="selectedActionContainer"
  				(addClicked)="onAddClicked()"
  				(removeClicked)="onRemoveClicked()"></commands>
  	</div>
  	<div>
	    <flowchart (selected)="onObjectSelected($event)"
	    			(unselected)="onObjectUnselected($event)"
	    			[actionContainerArray]="actionContainerArray"></flowchart>
	    <action (actionSave)="onSave($event)" 
	    			[selectedAction]="selectedActionContainer == undefined ? undefined : selectedActionContainer.action"></action>
    </div>
  `,
  providers: [PropertyService]
})
export class JobComponent {
	actionContainerArray : ActionContainer[] = [new ActionContainer('1', "" , "New Action", "Action001", "img/job.jpg", new EtlAction("Empty"))];
	selectedActionContainer : ActionContainer = undefined;

	@ViewChild(FlowchartComponent) flowchartComponent : FlowchartComponent;

	onObjectSelected(data) {
		this.selectedActionContainer = data;
	}

	onObjectUnselected(data) {
		this.selectedActionContainer = undefined;
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